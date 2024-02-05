import {
  attach,
  createEvent,
  createStore,
  sample,
  Event,
  Effect,
} from "effector";
import { api } from "@/shared/api";
import { User } from "@/shared/api/rest/auth.ts";
import {
  chainRoute,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from "atomic-router";

enum ViewerStatus {
  Initial = 0,
  Pending,
  Authenticated,
  Anonymous,
}

interface ChainParams {
  otherwise?: Event<void> | Effect<void, any, any>;
}

export const viewerGetFx = attach({ effect: api.auth.getMeFx });
export const $viewer = createStore<User | null>(null);

const $viewerStatus = createStore(ViewerStatus.Initial);
$viewerStatus.on(viewerGetFx.doneData, (status) => {
  if (status === ViewerStatus.Initial) return ViewerStatus.Pending;
  return status;
});
$viewer.on(viewerGetFx.doneData, (_, user) => user);
$viewerStatus.on(viewerGetFx.doneData, (_, user) => {
  if (user) return ViewerStatus.Authenticated;
  return ViewerStatus.Anonymous;
});
$viewerStatus.on(viewerGetFx.failData, (status, error) => {
  if (error.status === 401 || error.status === 403) {
    return ViewerStatus.Anonymous;
  }
  if (status === ViewerStatus.Pending) {
    return ViewerStatus.Anonymous;
  }
  return status;
});

export function chainAuthenticated<Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {},
): RouteInstance<Params> {
  const authenticationCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const userAuthenticated = createEvent();
  const userAnonymous = createEvent();

  /**
   Handling cases
   When authenticationCheckStarted
   * 1. status - Initial
   * 1.1 viewerGetFx - load data
   * 2. status - Pending
   * 2.1 do nothing - wait
   * 3. status - Authenticated
   * 3.1 open chained route
   * 4. status - Anonymous
   * 4.1 cancel
   *
   * 5. chain route is still not opened, but viewerGetFx.finally
   * 5.1 if status Authenticated -> open chain route
   * 5.2 if status Anonymous -> don't open chain route
   *
   * 6. chain route is still not opened, but route got closed (ex: you went back to other page)
   *
   * 7. chain route is already opened, but viewer status changed
   **/

  sample({
    clock: authenticationCheckStarted,
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Initial,
    target: viewerGetFx,
  });

  sample({
    clock: [authenticationCheckStarted, viewerGetFx.done],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Authenticated,
    target: userAuthenticated,
  });

  sample({
    clock: [authenticationCheckStarted, viewerGetFx.done, viewerGetFx.fail],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Anonymous,
    target: userAnonymous,
  });

  if (otherwise) {
    sample({
      clock: userAnonymous,
      filter: route.$isOpened,
      target: otherwise as Event<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: authenticationCheckStarted,
    openOn: [userAuthenticated],
    cancelOn: [userAnonymous],
  });
}

export function chainAnonymous<Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {},
): RouteInstance<Params> {
  const authenticationCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const userAuthenticated = createEvent();
  const userAnonymous = createEvent();

  sample({
    clock: authenticationCheckStarted,
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Initial,
    target: viewerGetFx,
  });

  sample({
    clock: [authenticationCheckStarted, viewerGetFx.done],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Authenticated,
    target: userAuthenticated,
  });

  sample({
    clock: [
      authenticationCheckStarted,
      viewerGetFx.doneData,
      viewerGetFx.failData,
    ],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Anonymous,
    target: userAnonymous,
  });

  if (otherwise) {
    sample({
      clock: userAuthenticated,
      filter: route.$isOpened,
      target: otherwise as Event<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: authenticationCheckStarted,
    openOn: [userAnonymous],
    cancelOn: [userAuthenticated],
  });
}
