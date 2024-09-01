import React from "react";
import { Outlet } from "react-router-dom";

export const DashboardLayout = React.memo(() => {
  return (
    <>
      <div>Header</div>
      <div>Sidebar</div>
      <Outlet />
    </>
  );
});

DashboardLayout.displayName = "DashboardLayout";
