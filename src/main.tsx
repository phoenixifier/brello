import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app";
import ScreenWrapper from "@/shared/screen-context.tsx";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ScreenWrapper>
      <App />
    </ScreenWrapper>
  </React.StrictMode>,
);
