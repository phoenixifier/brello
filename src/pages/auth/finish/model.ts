import { routes } from "@/shared/routing/routes.ts";
import { createEvent, createStore } from "effector";
import { attach } from "effector/effector.umd";
import { api } from "@/shared/api";

export const currentRoute = routes.auth.finished;
const getMeFx = attach({ effect: api.auth.getMeFx });

export const tryAgainClicked = createEvent();

export const $pending = getMeFx.pending;
export const $success = createStore(true);
