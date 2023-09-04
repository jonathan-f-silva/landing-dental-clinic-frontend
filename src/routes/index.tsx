import { RouteObject } from "react-router-dom";
import Home from "./Home.tsx";
import Dashboard from "./Dashboard.tsx";
import App from "../App.tsx";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default appRoutes;
