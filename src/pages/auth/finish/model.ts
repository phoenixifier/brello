import { routes } from "@/shared/routing/routes.ts";
import { createEvent, createStore, sample } from "effector";
import { attach } from "effector/effector.umd";
import { api } from "@/shared/api";
import { delay, not } from "patronum";

export const currentRoute = routes.auth.finished;
const getMeFx = attach({ effect: api.auth.getMeFx });

const authFinished = createEvent();
const authFailed = createEvent();
export const tryAgainClicked = createEvent();

export const $pending = getMeFx.pending;
export const $success = createStore(false);

sample({
  clock: currentRoute.opened,
  filter: not(getMeFx.pending),
  target: getMeFx,
});

sample({
  clock: getMeFx.doneData,
  filter: Boolean,
  target: authFinished,
});

$success.on(authFinished, () => true);

sample({
  clock: delay({
    source: authFinished,
    timeout: 800,
  }),
  filter: currentRoute.$isOpened,
  target: routes.home.open,
});

sample({
  clock: getMeFx.doneData,
  filter: (user) => !user,
  target: authFailed,
});

sample({
  clock: getMeFx.fail,
  target: authFailed,
});

$success.on(authFailed, () => false);

sample({
  clock: tryAgainClicked,
  target: routes.auth.signIn.open,
});
