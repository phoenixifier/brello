import { checkError, UserId } from "@/shared/api/rest/common.ts";
import { createEffect } from "effector/effector.umd";
import { PostgrestError } from "@supabase/supabase-js";
import { client } from "@/shared/api/client.ts";

export interface Workspaces {
  id: string;
  userId: UserId;
  name: string;
  slug: string | null;
  description: string | null;
  avatar_url: string | null;
}

export const workspaceExistsFx = createEffect<
  { userId: UserId },
  boolean,
  PostgrestError
>(async ({ userId }) => {
  const { data: profiles, error } = await client
    .from("profiles")
    .select()
    .eq("id", userId);

  checkError(error);

  if (profiles === null || profiles.length === 0) {
    return false;
  }
});
