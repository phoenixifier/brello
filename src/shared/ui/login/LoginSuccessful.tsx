import React from "react";

const LoginSuccessful: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex">
        <div className="flex items-center justify-center rounded-full bg-indigo-200/50 p-3.5">
          <div className="flex items-center justify-center rounded-full bg-indigo-400/30 p-4">
            <img src="/mail-purple.svg" alt="mail" />
          </div>
        </div>
      </span>
      <h1 className="pt-3 text-4xl font-bold">Sign In Successful</h1>
      <p className="text-gray-600">
        Your credentials have been verified. <br />
        Welcome back!
      </p>
      <p className="pt-5 text-gray-600">You will be redirected shortly...</p>
    </div>
  );
};

export default LoginSuccessful;
