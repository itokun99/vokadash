import { AuthLayout, LoginView } from "@/features/auth";
import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginView />,
      },
    ],
  },
];
