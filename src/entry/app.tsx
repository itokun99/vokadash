import React, { PropsWithChildren } from "react";
import "../core/assets/styles/index.css";
import {
  DashboardLayoutProps,
  VokadashContext,
  VokadashQueryProvider,
} from "@/features/_global";

export interface VokadashProps extends PropsWithChildren {
  appName: string;
  menus: DashboardLayoutProps["menus"];
  usermenus: DashboardLayoutProps["usermenus"];
}

export const Vokadash = React.memo(
  ({ menus, usermenus, children, appName }: VokadashProps) => {
    return (
      <VokadashContext.Provider value={{ appName, menus, usermenus }}>
        <VokadashQueryProvider>{children}</VokadashQueryProvider>
      </VokadashContext.Provider>
    );
  },
);

Vokadash.displayName = "Vokadash";
