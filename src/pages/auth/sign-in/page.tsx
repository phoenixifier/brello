import React from "react";
import { useUnit } from "effector-react";
import { $finished } from "@/pages/auth/sign-in/model";
import LoginLayout from "@/shared/ui/login/LoginLayout";
import LoginFinished from "@/shared/ui/login/LoginFinished";
import Login from "@/shared/ui/login/Login.tsx";
import { routes } from "@/shared/routing/routes.ts";

export const currentRoute = routes.auth.signIn;

const SignInPage: React.FC = () => {
  const finished = useUnit($finished);
  return <LoginLayout>{finished ? <LoginFinished /> : <Login />}</LoginLayout>;
};

export default SignInPage;
