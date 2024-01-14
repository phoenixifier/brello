import "./styles/index.css";
import Login from "@/app/components/Login.tsx";

export function App() {
  return (
    <>
      <div className="flex h-screen">
        <Login />
        <img
          src="/public/Geometric shapes.svg"
          className="hidden xl:flex"
          alt="Background"
        />
      </div>
    </>
  );
}
