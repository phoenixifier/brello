import React from "react";
import Layout from "@/pages/auth/sign-in/components/layout.tsx";

const LoggedInPage: React.FC = () => {
  return (
    <Layout>
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
          We sent a login link to olivia@untitledui.com
        </p>
        <button className="flex items-center gap-2 pt-5 font-semibold text-gray-600">
          <img src="/arrow-left.svg" alt="arrow" />
          <p>Back to log in</p>
        </button>
      </div>
    </Layout>
  );
};

export default LoggedInPage;
