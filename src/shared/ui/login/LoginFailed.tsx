import React from "react";
import { useUnit } from "effector-react";
import { tryAgainClicked } from "@/pages/auth/finish/model.ts";

const LoginFailed: React.FC = () => {
  const handleTryAgain = useUnit(tryAgainClicked);
  return (
    <div className="flex flex-col gap-3">
      <span className="flex">
        <div className="flex items-center justify-center rounded-full bg-indigo-200/50 p-3.5">
          <div className="flex items-center justify-center rounded-full bg-indigo-400/30 p-4">
            <img src="/error.svg" alt="mail" />
          </div>
        </div>
      </span>
      <h1 className="pt-3 text-4xl font-bold">Sign In Failed</h1>
      <p className="text-gray-600">
        We encountered an issue validating your sign-in. <br /> Please ensure
        the link hasn't expired or been used before.
      </p>
      <button
        className="flex items-center gap-2 pt-5 font-semibold text-gray-600"
        onClick={() => handleTryAgain()}
      >
        <img src="/arrow-left.svg" alt="arrow" />
        <p>Try again</p>
      </button>
    </div>
  );
};

export default LoginFailed;
