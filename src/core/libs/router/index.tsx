import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainRoutes } from "./routes/main";
import { authRoutes } from "./routes/auth";
import React from "react";

const router = createBrowserRouter([...mainRoutes, ...authRoutes]);

export const MatadorDashRouter = React.memo(() => {
  return <RouterProvider router={router} />;
});
