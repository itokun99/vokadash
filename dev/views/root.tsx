import { DashboardLayout, useVokadashContext } from "@/index";
import React from "react";
import { Outlet } from "react-router-dom";

export const RootView = () => {
  const appContext = useVokadashContext();
  return (
    <DashboardLayout menus={appContext.menus} usermenus={appContext.usermenus}>
      <Outlet />
    </DashboardLayout>
  );
};
