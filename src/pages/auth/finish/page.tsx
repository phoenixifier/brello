import React from "react";
import LoginLayout from "@/shared/ui/login/LoginLayout.tsx";
import LoginFinished from "@/shared/ui/login/LoginFinished.tsx";
import LoginFailed from "@/shared/ui/login/LoginFailed.tsx";
import LoginPending from "@/shared/ui/login/LoginPending.tsx";

const AuthFinished: React.FC = () => {
  const pending = true;
  const success = false;

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
