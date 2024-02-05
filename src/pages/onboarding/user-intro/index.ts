import UserIntroPage, {
  UserIntroLoader,
} from "@/pages/onboarding/user-intro/page.tsx";
import {
  authenticatedRoute,
  currentRoute,
} from "@/pages/onboarding/user-intro/model.ts";
import { createRouteView } from "atomic-router-react";

export const UserIntroRoute = {
  view: createRouteView({
    route: authenticatedRoute,
    view: UserIntroPage,
    otherwise: UserIntroLoader,
  }),
  route: currentRoute,
};
