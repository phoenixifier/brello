import React from "react";
import { useScreenSize } from "@/shared/screen-context";
import LoginHeader from "@/shared/ui/login/LoginHeader";
import LoginFooter from "@/shared/ui/login/LoginFooter";

const LoginLayout: React.FC<{ children: string | React.ReactElement }> = ({
  children,
}) => {
  const screen = useScreenSize();
  return (
    <div className="flex w-full flex-col 2xl:h-screen 2xl:flex-row">
      <img
        src={
          screen == "mobile"
            ? "/geometric-mobile.svg"
            : "/geometric-desktop.svg"
        }
        className="-order-1 mb-4 h-16 w-full bg-center bg-no-repeat object-cover 2xl:order-1 2xl:mb-0 2xl:h-full"
        alt="Background"
      />
      <div className="container mx-auto flex min-h-screen flex-col">
        <LoginHeader />
        <div className="flex-1" />
        <div className="flex justify-center">{children}</div>
        <div className="flex-1" />
        <LoginFooter />
      </div>
    </div>
  );
};

export default LoginLayout;
