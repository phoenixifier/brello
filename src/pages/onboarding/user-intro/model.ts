import { routes } from "@/shared/routing/routes.ts";
import { chainAuthenticated } from "@/shared/viewer";
import { debug } from "patronum";

export const currentRoute = routes.onboarding.user;

export const authenticatedRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.auth.signIn.open,
});

debug(authenticatedRoute.$isOpened);
