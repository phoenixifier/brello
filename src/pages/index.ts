import { createRoutesView } from "atomic-router-react";
import { HomeRoute } from "@/pages/home";
import { AuthSignInRoute } from "@/pages/auth/sign-in";
import { UserIntroRoute } from "@/pages/onboarding/user-intro";
import { Error404Route } from "@/pages/error404";
import { AuthFinishedRoute } from "@/pages/auth/finish";
import { UserWorkspaceRoute } from "@/pages/onboarding/workspace";

export const Pages = createRoutesView({
  routes: [
    HomeRoute,
    AuthSignInRoute,
    UserIntroRoute,
    UserWorkspaceRoute,
    Error404Route,
    AuthFinishedRoute,
  ],
});
