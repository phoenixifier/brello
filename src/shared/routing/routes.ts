import { createRoute, UnmappedRouteObject } from "atomic-router";

export const routes = {
  home: createRoute(),
  auth: {
    signIn: createRoute(),
  },
  onboarding: {
    user: createRoute(),
  },
};

export const pageNotFound = createRoute();

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
    path: "/onboarding/user",
    route: routes.onboarding.user,
  },
];
