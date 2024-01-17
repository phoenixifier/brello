import "./styles/index.css";
import SignInPage from "@/pages/auth/sign-in/index.tsx";
import LoggedInPage from "@/pages/auth/sign-in/components/logged-page.tsx";

export function App() {
  return (
    <>
      <LoggedInPage />
    </>
  );
}
