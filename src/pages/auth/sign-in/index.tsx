import React from "react";
import { useUnit } from "effector-react";
import { $finished } from "@/pages/auth/sign-in/model";
import LoginLayout from "@/shared/ui/login/LoginLayout";
import LoginFinished from "@/shared/ui/login/LoginFinished";
import Login from "@/shared/ui/login/Login.tsx";

const SignInPage: React.FC = () => {
  const finished = useUnit($finished);
  return <LoginLayout>{finished ? <LoginFinished /> : <Login />}</LoginLayout>;
};

export default SignInPage;
