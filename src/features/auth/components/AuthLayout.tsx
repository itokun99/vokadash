import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = React.memo(() => {
  return (
    <>
      <div>Auth Layout</div>
      <Outlet />
    </>
  );
});

AuthLayout.displayName = "AuthLayout";
