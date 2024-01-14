import React from "react";
import Layout from "@/app/components/Layout.tsx";

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5 px-8 items-center">
        <div className="w-full flex flex-col gap-1 xl:w-1/2">
          <h1 className="font-semibold text-2xl">Sign in</h1>
          <p className="text-gray-600">Start your 30-day free trial.</p>
        </div>
        <div className="w-full flex flex-col gap-1 xl:w-1/2">
          <p className="text-xs">Email</p>
          <input
            className="border border-gray-300 rounded-lg px-3.5 outline-none py-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full flex flex-col gap-2 xl:w-1/2">
          <button className="flex rounded-lg justify-center font-semibold px-4 py-2.5 bg-[#155EEF] text-white">
            Get started
          </button>
          <button className="flex rounded-lg items-center justify-center px-4 py-2.5 border border-gray-300 gap-2">
            <img src="/public/google.svg" alt="Icon" />
            <p className="font-semibold">Sign up with Google</p>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
