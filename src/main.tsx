import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app";
import ScreenWrapper from "@/shared/screen-context.tsx";
import { Provider } from "effector-react";
import { allSettled, fork } from "effector";
import { RouterProvider } from "atomic-router-react";
import { router } from "@/shared/routing";
import { appStarted } from "@/shared/init";

const root = document.getElementById("root")!;

const scope = fork();

allSettled(appStarted, { scope }).catch(() =>
  console.warn("Failed to start the app"),
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider value={scope}>
      <RouterProvider router={router}>
        <ScreenWrapper>
          <App />
        </ScreenWrapper>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
);
