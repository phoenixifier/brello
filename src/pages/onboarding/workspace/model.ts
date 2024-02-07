import { routes } from "@/shared/routing/routes.ts";
import { attach, createEvent, createStore, sample } from "effector";
import { api } from "@/shared/api";
import { $viewer } from "@/shared/viewer";
import { pending } from "patronum";

export type WorkspaceError = "InvalidName" | "InvalidSlug" | "UnknownError";
export const currentRoute = routes.onboarding.workspace;
const workspaceExistsFx = attach({
  source: $viewer,
  async effect(viewer) {
    return api.workspaces.workspaceExistsFx({ userId: viewer!.id });
  },
});
const workspaceCreateFx = attach({ effect: api.workspaces.workspaceCreateFx });
export const getStarted = createEvent();
export const nameChanged = createEvent();
export const slugChanged = createEvent();
export const descriptionChanged = createEvent();

export const $error = createStore<WorkspaceError | null>(null);
export const $pending = pending({
  effects: [workspaceExistsFx, workspaceCreateFx],
});
export const $name = createStore<string>("");
export const $slug = createStore<string>("");
export const $description = createStore<string>("");

const isValidName = $name.map((name) => name.length > 3 && name.length < 20);
const isValidSlug = $slug.map((slug) => {
  const regex = new RegExp("^\\w+(-\\w+)*$");
  if (slug === null) return false;
  if (!regex.test(slug ?? "")) return false;
  return slug.length > 3;
});
const isValidDesc = $description.map((desc) => {
  if (desc !== null) return desc.length > 5;
});
$name.on(nameChanged, (_, name) => name);
$slug.on(slugChanged, (_, slug) => slug);
$description.on(descriptionChanged, (_, desc) => desc);

const $combinedSource = createStore({
  name: $name.getState(),
  slug: $slug.getState(),
  description: $description.getState(),
});
sample({
  clock: getStarted,
  source: $combinedSource,
  filter: isValidName,
  target: [workspaceCreateFx, $error.reinit],
});

sample({
  clock: getStarted,
  source: { slug: $slug },
  filter: isValidSlug,
  target: [workspaceCreateFx, $error.reinit],
});

sample({
  clock: getStarted,
  source: { description: $description },
  filter: isValidDesc,
  target: [workspaceCreateFx, $error.reinit],
});
