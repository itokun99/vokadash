import { Vokadash } from "../src/index";
import { Circle, Settings, User2 } from "lucide-react";
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
        element: <div>Dashboard</div>,
      },
      {
        path: "setting",
        element: <div>Setting</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Vokadash
    appName="Vokadash 0.0.1"
    menus={[
      {
        title: "Menu Staff 123",
        url: "/",
        icon: User2,
        items: [
          {
            title: "Dashboard",
            url: "/",
            icon: User2,
          },
          {
            title: "Cuti",
            url: "/cuti",
            icon: User2,
          },
          {
            title: "Lembur",
            url: "/lembur",
            icon: User2,
          },
        ],
      },
      {
        title: "Setting",
        url: "/setting",
        icon: Settings,
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
