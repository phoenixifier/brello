import React from "react";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";
import OnboardingLayout from "@/shared/ui/onboarding/OnboardingLayout.tsx";

const UserWorkspacePage: React.FC = () => {
  return (
    <OnboardingLayout
      background="/background-workspace.svg"
      icon="/workspace.svg"
      title="Let's biuld a Workspace"
      subtitle="Boost your productivity by making it easier for everyone to access boards in one location."
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-1">
          <p className="text-xs">Workspace name</p>
          <Input placeholder="Your Company Co." />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">brello.io/workspaces/</p>
          <Input placeholder="your-company-co." />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">Description</p>
          <Input
            className="pb-24"
            placeholder="Our team organizes everything here."
          />
        </div>
        <Button className="bg-[#155EEF] text-white">Get started</Button>
      </form>
    </OnboardingLayout>
  );
};

export default UserWorkspacePage;
