import "./styles/index.css";
import SignInPage from "@/pages/auth/sign-in/index.tsx";
import cx from "classnames";
import React from "react";

export function App() {
  const [mobile] = React.useState(false);
  return (
    <>
      <div className="flex w-full flex-col items-center xl:h-screen xl:flex-row xl:items-start">
        <img
          src={
            !mobile
              ? "/src/pages/auth/sign-in/geometric-mobile.svg"
              : "/src/pages/auth/sign-in/geometric-desktop.svg"
          }
          className={cx(
            { "mb-4 w-full h-16 bg-center bg-no-repeat order-1": mobile },
            { "-order-1": !mobile },
          )}
          alt="Background"
        />
        <SignInPage />
      </div>
    </>
  );
}
