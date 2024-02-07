import { routes } from "@/shared/routing/routes.ts";
import { $viewer, chainAuthenticated } from "@/shared/viewer";
import { attach, createEvent, createStore, sample } from "effector";
import { api } from "@/shared/api";
import { not, pending, reset } from "patronum";
import { chainRoute, RouteInstance, RouteParams } from "atomic-router";

export const currentRoute = routes.onboarding.user;
export const authenticatedRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.auth.signIn.open,
});

export const profileCreateFx = attach({ effect: api.profiles.profileCreateFx });
export const profileExistsFx = attach({
  source: $viewer,
  async effect(viewer) {
    return api.profiles.profileExistsFx({ userId: viewer!.id });
  },
});

export const profileLoadRoute = chainRoute({
  route: currentRoute,
  beforeOpen: { effect: profileExistsFx, mapParams: () => ({}) },
});

export type OnboardingUserError = "FirstsNameRequired" | "UnknownError";

export const formSubmitted = createEvent();
export const skipClicked = createEvent<string | RouteInstance<RouteParams>>();

export const onboardingUserFinished = createEvent();
export const firstNameChanged = createEvent<string>();
export const lastNameChanged = createEvent<string>();
export const $firstName = createStore<string>("");
export const $lastName = createStore<string>("");

export const $pending = pending({
  effects: [profileCreateFx, profileExistsFx],
});

export const $error = createStore<OnboardingUserError | null>(null);

const isValidFirstName = $firstName.map(
  (firstName) => firstName.length >= 2 && firstName.length < 20,
);

const isValidLastName = $lastName.map((lastName) => {
  if (lastName !== null) return lastName.length >= 2 && lastName.length < 20;
});

$firstName.on(firstNameChanged, (_, firstName) => firstName);
$lastName.on(lastNameChanged, (_, lastName) => lastName);

sample({
  clock: profileExistsFx.doneData,
  filter: (exists) => exists,
  target: onboardingUserFinished,
});

sample({
  clock: skipClicked,
  target: onboardingUserFinished,
});

sample({
  clock: formSubmitted,
  source: { firstName: $firstName, lastName: $lastName, viewer: $viewer },
  filter: isValidFirstName && isValidLastName,
  fn: ({ firstName, lastName, viewer }) => {
    {
      viewer!.id, firstName, lastName;
    }
  },
  target: [profileCreateFx, $error.reinit],
});

sample({
  clock: profileCreateFx.done,
  target: onboardingUserFinished,
});

sample({
  clock: onboardingUserFinished,
  target: routes.home.open,
});

sample({
  clock: formSubmitted,
  filter: not(isValidFirstName),
  fn: (): OnboardingUserError => "FirstsNameRequired",
  target: $error,
});

sample({
  clock: [profileExistsFx.fail, profileCreateFx.fail],
  fn: (): OnboardingUserError => "UnknownError",
  target: $error,
});

reset({
  clock: currentRoute.closed,
  target: [$firstName, $lastName, $error],
});
