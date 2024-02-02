import { attach, createEvent, createStore, sample, Event } from "effector";
import { api } from "@/shared/api";
import { User } from "@/shared/api/rest/auth.ts";
import {
  chainRoute,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from "atomic-router";

enum ViewerStatus {
  Initial,
  Pending,
  Authenticated,
  Anonymous,
}

interface ChainParams {
  otherwise?: Event<void>;
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
$viewerStatus.on(viewerGetFx.fail, () => ViewerStatus.Anonymous);

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

  /* 1 */
  sample({
    clock: authenticationCheckStarted,
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Initial,
    target: viewerGetFx,
  });

  sample({
    clock: [authenticationCheckStarted, viewerGetFx.doneData],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Authenticated,
    target: userAuthenticated,
  });

  sample({
    clock: [authenticationCheckStarted, viewerGetFx.doneData],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Anonymous,
    target: userAnonymous,
  });

  if (otherwise) {
    sample({ clock: userAnonymous, target: otherwise });
  }

  return chainRoute({
    route,
    beforeOpen: authenticationCheckStarted,
    openOn: [userAuthenticated],
    cancelOn: [userAnonymous],
  });
}
