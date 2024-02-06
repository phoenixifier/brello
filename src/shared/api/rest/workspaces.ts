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
  avatarUrl: string | null;
}

export const workspaceExistsFx = createEffect<
  { userId: UserId },
  boolean,
  PostgrestError
>(async ({ userId }) => {
  const { data: workspaces, error } = await client
    .from("workspaces")
    .select()
    .eq("user_id", userId);

  checkError(error);

  return !(workspaces === null || workspaces.length === 0);
});

export const workspaceCreateFx = createEffect<
  { workspace: Omit<Workspaces, "id"> },
  void,
  PostgrestError
>(async ({ workspace }) => {
  const { userId, name, slug, description } = workspace;
  const { error } = await client.from("workspaces").insert({
    user_id: userId,
    name,
    slug,
    description,
  });

  checkError(error);

  return;
});

export const workspaceGetFx = createEffect<
  { userId: UserId },
  Workspaces | null,
  PostgrestError
>(async ({ userId }) => {
  const { data, error } = await client
    .from("workspaces")
    .select()
    .eq("user_id", userId);

  checkError(error);

  if (data === null) {
    return null;
  }

  const workspace = data[0];
  const { id, name, slug, description, avatar_url } = workspace;

  return {
    id,
    userId,
    name,
    slug,
    description,
    avatarUrl: avatar_url,
  };
});

export const workspaceUpdateFx = createEffect<
  { workspace: Workspaces },
  void,
  PostgrestError
>(async ({ workspace }) => {
  const { userId, name, slug, description, avatarUrl } = workspace;
  const { error } = await client
    .from("workspaces")
    .update({
      user_id: userId,
      name,
      slug,
      description,
      avatar_url: avatarUrl,
    })
    .eq("user_id", userId);

  checkError(error);

  return;
});
