import { attach, createEvent, createStore, sample } from "effector";
import { api } from "@/shared/api";
import { not } from "patronum";
import { routes } from "@/shared/routing/routes.ts";
import { chainAnonymous } from "@/shared/viewer";

export const currentRoute = routes.auth.signIn;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

export type SignInError = "InvalidEmail" | "RateLimit" | "UnknownError";
const signInFx = attach({ effect: api.auth.signInWithEmailFx });

export const formSubmitted = createEvent();
export const emailChanged = createEvent<string>();
export const backToLogin = createEvent();

export const $email = createStore("");
export const $error = createStore<SignInError | null>(null);
export const $pending = signInFx.pending;
export const $finished = createStore(false);

$email.on(emailChanged, (_, email) => email);

const isEmailValid = $email.map(
  (email) => email.includes("@") && email.includes(".") && email.length > 5,
);

/*When login is successful */
sample({
  clock: formSubmitted,
  source: { email: $email },
  filter: isEmailValid,
  target: [signInFx, $error.reinit],
});

$finished.on(signInFx.done, () => true);

/*When login is successful, but the user wants to get back to log in */
sample({
  clock: backToLogin,
  target: [$finished.reinit, $email.reinit, $error.reinit],
});

/* In case email is invalid */
sample({
  clock: formSubmitted,
  filter: not(isEmailValid),
  fn: (): SignInError => "InvalidEmail",
  target: $error,
});

/* In case of error with the request */
$error.on(signInFx.failData, (_, error) => {
  if (error.status === 429) {
    return "RateLimit";
  }
  return "UnknownError";
});
