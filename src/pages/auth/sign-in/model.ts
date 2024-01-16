import { createEvent, createStore, sample } from "effector";

export type SignInError = "InvalidEmail" | "UnknownError";

export const formSubmitted = createEvent();
export const emailChanged = createEvent<string>();
export const backToLogin = createEvent();

export const $email = createStore("");
export const $error = createStore<SignInError | null>(null);
export const $pending = createStore(false);
export const $finished = createStore(false);

$email.on(emailChanged, (_, email) => email);

const isEmailValid = $email.map(
  (email) => email.includes("@") && email.includes(".") && email.length > 5,
);

sample({
  clock: formSubmitted,
  source: $email,
  filter: isEmailValid,
  target: $email,
});
