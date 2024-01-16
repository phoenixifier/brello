import "./styles/index.css";
import SignInPage from "@/pages/auth/sign-in/index.tsx";
import { useScreenSize } from "@/shared/screen-context.tsx";

export function App() {
  const screen = useScreenSize();
  return (
    <>
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
        <SignInPage />
      </div>
    </>
  );
}
