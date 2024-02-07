import React from "react";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { skipClicked } from "@/pages/onboarding/user-intro/model.ts";

const OnboardingLayout: React.FC<{
  background?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  hasLink?: boolean;
  children: React.ReactNode;
}> = ({ background, icon, title, subtitle, hasLink, children }) => {
  const handleSkip = useUnit(skipClicked);
  return (
    <div>
      <img
        src={background}
        alt="background"
        className="absolute right-1/2 -translate-y-32 translate-x-1/2 md:translate-y-0"
      />
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-5 py-16 md:items-center md:justify-center md:p-0">
        <div className="flex flex-col gap-12">
          <img src={icon} alt="user" className="h-14 w-14" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="flex flex-col items-start gap-1 md:flex-row">
              <p className="text-[#475467]">{subtitle}</p>
              {hasLink ? (
                <Link to={handleSkip("")} className="text-[#004EEB]">
                  Skip
                </Link>
              ) : null}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
