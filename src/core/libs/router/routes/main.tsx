import { DashboardLayout, DashboardView } from "@/features/dashboard";
import { UserView } from "@/features/userman";
import { RouteObject } from "react-router-dom";

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardView />,
      },
      {
        path: "users",
        element: <UserView />,
      },
    ],
  },
];
