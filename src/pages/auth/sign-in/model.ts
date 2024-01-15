import { createEvent, createStore } from "effector";

export type SignInError = "InvalidEmail" | "UnknownError";

export const formSubmitted = createEvent();
export const emailChanged = createEvent<string>();
export const $email = createStore("");
export const $error = createStore<SignInError | null>(null);
export const $pending = createStore(false);

$email.on(emailChanged, (_, email) => email);
