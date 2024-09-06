import { DashboardLayout, useVokadashContext } from "@/index";
import React from "react";
import { Outlet } from "react-router-dom";

export const RootView = () => {
  const appContext = useVokadashContext();
  console.log("appContext.menus ==>", appContext.menus);
  return (
    <DashboardLayout menus={appContext.menus} usermenus={appContext.usermenus}>
      <Outlet />
    </DashboardLayout>
  );
};
