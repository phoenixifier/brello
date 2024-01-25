import HomePage from "@/pages/home/page.tsx";
import { currentRoute } from "@/pages/home/model.ts";

export const HomeRoute = {
  view: HomePage,
  route: currentRoute,
};
