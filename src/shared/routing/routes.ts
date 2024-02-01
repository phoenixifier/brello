import { createRoute, UnmappedRouteObject } from "atomic-router";

export const routes = {
  home: createRoute(),
  auth: {
    signIn: createRoute(),
    finished: createRoute(),
  },
  onboarding: {
    user: createRoute(),
    workspace: createRoute(),
  },
};

export const pageNotFoundRoute = createRoute();

export const routesMap: UnmappedRouteObject<object>[] = [
  {
    path: "/",
    route: routes.home,
  },
  {
    path: "/auth/sign-in",
    route: routes.auth.signIn,
  },
  {
    path: "/auth/finish",
    route: routes.auth.finished,
  },
  {
    path: "/onboarding/user",
    route: routes.onboarding.user,
  },
  {
    path: "/onboarding/workspace",
    route: routes.onboarding.workspace,
  },
];
