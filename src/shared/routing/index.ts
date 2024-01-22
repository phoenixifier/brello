import { createHistoryRouter, createRouterControls } from "atomic-router";
import { pageNotFound, routesMap } from "@/shared/routing/routes.ts";
import { sample } from "effector";
import { appStarted } from "@/shared/init";
import { createBrowserHistory } from "history";

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesMap,
  notFoundRoute: pageNotFound,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
