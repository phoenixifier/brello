import React from "react";
import Header from "@/pages/auth/sign-in/components/Header.tsx";
import Footer from "@/pages/auth/sign-in/components/Footer.tsx";
import { useScreenSize } from "@/shared/screen-context.tsx";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const screen = useScreenSize();
  return (
    <div className="flex w-full flex-col 2xl:h-screen 2xl:flex-row">
      <img
        src={
          screen == "mobile"
            ? "/src/pages/auth/sign-in/geometric-mobile.svg"
            : "/src/pages/auth/sign-in/geometric-desktop.svg"
        }
        className="-order-1 mb-4 h-16 w-full bg-center bg-no-repeat 2xl:order-1 2xl:mb-0 2xl:h-full"
        alt="Background"
      />
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header />
        <div className="flex-1" />
        <div className="flex justify-center">{children}</div>
        <div className="flex-1" />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
