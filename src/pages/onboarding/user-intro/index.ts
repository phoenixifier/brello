import UserIntroPage from "@/pages/onboarding/user-intro/page.tsx";
import { currentRoute } from "@/pages/onboarding/user-intro/model.ts";

export const UserIntroRoute = {
  view: UserIntroPage,
  route: currentRoute,
};
