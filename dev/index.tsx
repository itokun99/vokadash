import { Vokadash } from "../src/index";
import { Circle } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootView } from "./views/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: "Test",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Vokadash
    appName="Vokadash 0.0.1"
    menus={[
      {
        title: "Test",
        url: "/",
        icon: Circle,
      },
    ]}
    usermenus={[
      {
        title: "My Account",
        label: true,
      },
      {
        separator: true,
      },
      {
        title: "Account Setting",
        url: "/account/setting",
      },
      {
        title: "Log Out",
        url: "/account/logout",
      },
    ]}
  >
    <RouterProvider router={router} />
  </Vokadash>,
);
