import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./routes/index.tsx";
import { ConfigProvider } from "./contexts/ConfigProvider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={createBrowserRouter(appRoutes)} />
      </ChakraProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
