import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootView } from "./views/root";
import { AuthLayout } from "@/features/auth";
import { Vokadash } from "@/index";

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
  {
    path: "/login",
    element: <AuthLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Vokadash
    appName="Vokadash 0.0.1"
    menus={[
      {
        title: "Menu Staff 123",
        url: "/",
        icon: "User2",
        items: [
          {
            title: "Dashboard",
            url: "/",
            icon: "LayoutDashboard",
          },
        ],
      },
      {
        title: "Setting",
        url: "/setting",
        icon: "Settings2",
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
