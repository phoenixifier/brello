import { AuthError, PostgrestError } from "@supabase/supabase-js";

export type Email = string;
export type UserId = Uuid;

export interface User {
  id: UserId;
  email: Email;
}

export const checkError = (error: AuthError | PostgrestError | null) => {
  if (error) {
    throw error;
  }
};
