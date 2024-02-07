import React from "react";
import { useUnit } from "effector-react";
import {
  $email,
  $error,
  $pending,
  emailChanged,
  formSubmitted,
  SignInError,
} from "@/pages/auth/sign-in/model.ts";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";

const Login: React.FC = () => {
  const [email, pending, error] = useUnit([$email, $pending, $error]);
  const [handleEmail, handleSubmit] = useUnit([emailChanged, formSubmitted]);

  const errorText: { [Key in SignInError]: React.ReactNode } = {
    InvalidEmail: "Must be a valid email",
    UnknownError: "Oops, something went wrong. Please try again",
    RateLimit: "Too many requests. Please try again later",
  };
  return (
    <form
      className="flex w-full flex-col gap-5 px-8 2xl:w-1/2"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-gray-600">Start your 30-day free trial.</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className="text-xs">Email</p>
        <Input
          className="border-gray-300"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
          disabled={pending}
          error={error ? errorText[error] : null}
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <Button
          className="bg-[#620093] text-white"
          type="submit"
          loading={pending}
        >
          Get started
        </Button>
        <Button className="gap-2 border border-gray-300">
          <img src="/public/google.svg" alt="Icon" />
          <p className="font-semibold">Sign up with Google</p>
        </Button>
      </div>
    </form>
  );
};

export default Login;
