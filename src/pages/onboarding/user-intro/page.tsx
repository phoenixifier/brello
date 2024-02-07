import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";
import OnboardingLayout from "@/shared/ui/onboarding/OnboardingLayout.tsx";
import { useUnit } from "effector-react";
import {
  $error,
  $firstName,
  $lastName,
  $pending,
  firstNameChanged,
  formSubmitted,
  lastNameChanged,
  OnboardingUserError,
} from "@/pages/onboarding/user-intro/model.ts";
import React from "react";

export const UserIntroLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Loading page...
    </div>
  );
};

const UserIntroPage = () => {
  const [firstName, lastName, error, pending] = useUnit([
    $firstName,
    $lastName,
    $error,
    $pending,
  ]);
  const [handleFirstName, handleLastName, handleSubmit] = useUnit([
    firstNameChanged,
    lastNameChanged,
    formSubmitted,
  ]);
  const errorText: { [Key in OnboardingUserError]: React.ReactNode } = {
    FirstsNameRequired: "First name is required",
    UnknownError: "Oops, something went wrong. Please try again",
  };

  return (
    <OnboardingLayout
      background="/background-pattern.svg"
      icon="/user-intro.svg"
      title="Please, introduce yourself "
      subtitle="You can do this later on Profile page. "
      hasLink
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-1">
            <p className="text-xs">First name</p>
            <Input
              className="border-gray-300"
              placeholder="First name"
              name="name"
              value={firstName}
              onChange={(e) => handleFirstName(e.target.value)}
              disabled={pending}
              error={error ? errorText[error] : null}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Last name</p>
            <Input
              className="border-gray-300"
              placeholder="Last name"
              name="name"
              value={lastName}
              onChange={(e) => handleLastName(e.target.value)}
              disabled={pending}
              error={error ? errorText[error] : null}
            />
          </div>
        </div>
        <Button type="submit" className="bg-[#155EEF] text-white">
          Continue
        </Button>
      </form>
    </OnboardingLayout>
  );
};

export default UserIntroPage;
