import React from "react";
import Layout from "@/pages/auth/sign-in/components/Layout.tsx";
import { useUnit } from "effector-react";
import { $finished } from "@/pages/auth/sign-in/model.ts";
import LoginFinished from "@/pages/auth/sign-in/components/LoginFinished.tsx";
import Login from "@/pages/auth/sign-in/components/Login.tsx";

const SignInPage: React.FC = () => {
  const finished = useUnit($finished);
  return <Layout>{finished ? <LoginFinished /> : <Login />}</Layout>;
};

export default SignInPage;
