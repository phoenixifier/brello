import { AuthError } from "@supabase/supabase-js";

export type Email = string;
export type UserId = Uuid;

export interface User {
  id: UserId;
  email: Email;
}

export const checkError = (error: AuthError | null) => {
  if (error) {
    throw error;
  }
};
