import SignInPage, { PageLoading } from "@/pages/auth/sign-in/page.tsx";
import { anonymousRoute, currentRoute } from "@/pages/auth/sign-in/model.ts";
import { createRouteView } from "atomic-router-react";

const PageLoaderView = createRouteView({
  route: anonymousRoute,
  view: SignInPage,
  otherwise: PageLoading,
});

export const AuthSignInRoute = {
  view: PageLoaderView,
  route: currentRoute,
};
