import React from "react";
import { Audio } from "react-loader-spinner";

const LoginPending: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex">
        <div className="flex items-center justify-center rounded-full bg-indigo-200/50 p-3.5">
          <div className="flex items-center justify-center rounded-full bg-indigo-400/30 p-4">
            <Audio height="40" width="40" color="blue" ariaLabel="loading" />
          </div>
        </div>
      </span>
      <h1 className="pt-3 text-4xl font-bold">Signing You In</h1>
      <p className="text-gray-600">
        Validating your credentials. This may take a few seconds...
      </p>
    </div>
  );
};

export default LoginPending;
