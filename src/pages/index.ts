import { createRoutesView } from "atomic-router-react";
import { HomeRoute } from "@/pages/home";
import { AuthSignInRoute } from "@/pages/auth/sign-in";
import { UserIntroRoute } from "@/pages/onboarding/user-intro";
import { Error404Route } from "@/pages/error404";

export const Pages = createRoutesView({
  routes: [HomeRoute, AuthSignInRoute, UserIntroRoute, Error404Route],
});
