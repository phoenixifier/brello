import ErrorPage from "@/pages/error404/page.tsx";
import { currentRoute } from "@/pages/error404/model.ts";

export const Error404Route = {
  view: ErrorPage,
  route: currentRoute,
};
