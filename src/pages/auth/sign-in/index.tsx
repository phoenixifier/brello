import React from "react";
import Layout from "@/app/components/Layout.tsx";
import {
  emailChanged,
  $email,
  formSubmitted,
} from "@/pages/auth/sign-in/model.ts";
import { useUnit } from "effector-react";

const SignInPage: React.FC = () => {
  const [email, handleEmail, handleSubmit] = useUnit([
    $email,
    emailChanged,
    formSubmitted,
  ]);
  return (
    <Layout>
      <form
        className="flex flex-col items-center gap-5 px-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex w-full flex-col gap-1 xl:w-1/2">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-gray-600">Start your 30-day free trial.</p>
        </div>
        <div className="flex w-full flex-col gap-1 xl:w-1/2">
          <p className="text-xs">Email</p>
          <input
            className="rounded-lg border border-gray-300 px-3.5 py-2 outline-none"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col gap-2 xl:w-1/2">
          <button className="flex justify-center rounded-lg bg-[#155EEF] px-4 py-2.5 font-semibold text-white">
            Get started
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5">
            <img src="/public/google.svg" alt="Icon" />
            <p className="font-semibold">Sign up with Google</p>
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default SignInPage;
