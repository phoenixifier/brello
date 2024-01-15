import "./styles/index.css";
import SignInPage from "@/pages/auth/sign-in/index.tsx";

export function App() {
  return (
    <>
      <div className="flex h-screen">
        <SignInPage />
        <img
          src="/public/Geometric shapes.svg"
          className="hidden xl:flex"
          alt="Background"
        />
      </div>
    </>
  );
}
