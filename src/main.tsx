import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/index.tsx";
import { ConfigProvider } from "./contexts/ConfigProvider.tsx";
import AppThemeProvider from "./theme/AppThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AppThemeProvider>
        <RouterProvider
          router={createBrowserRouter(appRoutes, {
            basename: import.meta.env.BASE_URL || "/",
          })}
        />
      </AppThemeProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
