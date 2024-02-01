import React from "react";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";
import OnboardingLayout from "@/shared/ui/onboarding/OnboardingLayout.tsx";

const UserIntroPage: React.FC = () => {
  return (
    <OnboardingLayout
      background="/background-pattern.svg"
      icon="/user-intro.svg"
      title="Please, introduce yourself "
      subtitle="You can do this later on Profile page. "
      hasLink
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-1">
            <p className="text-xs">First name</p>
            <Input
              className="border-gray-300"
              placeholder="First name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Last name</p>
            <Input
              className="border-gray-300"
              placeholder="Last name"
              name="name"
            />
          </div>
        </div>
        <Button className="bg-[#155EEF] text-white">Continue</Button>
      </form>
    </OnboardingLayout>
  );
};

export default UserIntroPage;
