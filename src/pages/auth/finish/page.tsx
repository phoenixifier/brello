import React from "react";
import LoginLayout from "@/shared/ui/login/LoginLayout.tsx";
import LoginFailed from "@/shared/ui/login/LoginFailed.tsx";
import LoginPending from "@/shared/ui/login/LoginPending.tsx";
import { useUnit } from "effector-react";
import { $pending, $success } from "@/pages/auth/finish/model.ts";
import LoginSuccessful from "@/shared/ui/login/LoginSuccessful.tsx";

const AuthFinished: React.FC = () => {
  const [pending, success] = useUnit([$pending, $success]);

  return (
    <LoginLayout>
      {pending ? (
        <LoginPending />
      ) : success ? (
        <LoginSuccessful />
      ) : (
        <LoginFailed />
      )}
    </LoginLayout>
  );
};

export default AuthFinished;
