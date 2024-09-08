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

const VokadashWithContext = React.memo(
  ({ menus, usermenus, children, appName }: VokadashProps) => {
    return (
      <VokadashContext.Provider value={{ appName, menus, usermenus }}>
        {children}
      </VokadashContext.Provider>
    );
  },
);

VokadashWithContext.displayName = "VokadashWithContext";

export const Vokadash = React.memo((props: VokadashProps) => {
  return (
    <VokadashQueryProvider>
      <VokadashWithContext {...props} />
    </VokadashQueryProvider>
  );
});
