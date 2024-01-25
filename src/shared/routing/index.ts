import { createHistoryRouter, createRouterControls } from "atomic-router";
import { pageNotFoundRoute, routesMap } from "@/shared/routing/routes.ts";
import { sample } from "effector";
import { appStarted } from "@/shared/init";
import { createBrowserHistory } from "history";

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesMap,
  notFoundRoute: pageNotFoundRoute,
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
