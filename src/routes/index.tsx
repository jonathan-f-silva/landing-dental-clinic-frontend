import { RouteObject } from "react-router-dom";
import Home from "./Home.tsx";
import Dashboard, { action as dashboardAction } from "./Dashboard.tsx";
import App, { loader as appLoader } from "../App.tsx";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        action: dashboardAction,
      },
    ],
  },
];

export default appRoutes;
