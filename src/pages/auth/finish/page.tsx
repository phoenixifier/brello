import React from "react";
import LoginLayout from "@/shared/ui/login/LoginLayout.tsx";
import LoginFinished from "@/shared/ui/login/LoginFinished.tsx";
import LoginFailed from "@/shared/ui/login/LoginFailed.tsx";
import LoginPending from "@/shared/ui/login/LoginPending.tsx";
import { useUnit } from "effector-react";
import { $pending, $success } from "@/pages/auth/finish/model.ts";

const AuthFinished: React.FC = () => {
  const [pending, success] = useUnit([$pending, $success]);

  return (
    <LoginLayout>
      {pending ? (
        <LoginPending />
      ) : success ? (
        <LoginFinished />
      ) : (
        <LoginFailed />
      )}
    </LoginLayout>
  );
};

export default AuthFinished;
