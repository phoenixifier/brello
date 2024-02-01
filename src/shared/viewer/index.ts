import { attach, createStore } from "effector";
import { api } from "@/shared/api";
import { User } from "@/shared/api/rest/auth.ts";

enum ViewerStatus {
  Initial,
  Pending,
  Authenticated,
  Anonymous,
}

export const viewerGetFx = attach({ effect: api.auth.getMeFx });

export const $viewer = createStore<User | null>(null);

createStore(ViewerStatus.Initial);

$viewer.on(viewerGetFx.doneData, (_, user) => user);
