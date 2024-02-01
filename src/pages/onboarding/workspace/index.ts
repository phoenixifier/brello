import UserWorkspacePage from "@/pages/onboarding/workspace/page.tsx";
import { currentRoute } from "@/pages/onboarding/workspace/model.ts";

export const UserWorkspaceRoute = {
  view: UserWorkspacePage,
  route: currentRoute,
};
