import SignInPage from "@/pages/auth/sign-in/page.tsx";
import { currentRoute } from "@/pages/auth/sign-in/model.ts";

export const AuthSignInRoute = {
  view: SignInPage,
  route: currentRoute,
};
