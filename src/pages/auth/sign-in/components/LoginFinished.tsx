import React from "react";
import { useUnit } from "effector-react";
import { $email, backToLogin } from "@/pages/auth/sign-in/model.ts";

const LoginFinished: React.FC = () => {
  const [email, handleBackToLogin] = useUnit([$email, backToLogin]);
  return (
    <div className="flex flex-col gap-3">
      <span className="flex">
        <div className="flex items-center justify-center rounded-full bg-indigo-200/50 p-3.5">
          <div className="flex items-center justify-center rounded-full bg-indigo-400/30 p-4">
            <img src="/mail-purple.svg" alt="mail" />
          </div>
        </div>
      </span>
      <h1 className="pt-3 text-4xl font-bold">Check your email</h1>
      <p className="text-gray-600">
        We sent a login link to <span>{email}</span>
      </p>
      <button
        className="flex items-center gap-2 pt-5 font-semibold text-gray-600"
        onClick={() => handleBackToLogin()}
      >
        <img src="/arrow-left.svg" alt="arrow" />
        <p>Back to log in</p>
      </button>
    </div>
  );
};

export default LoginFinished;
