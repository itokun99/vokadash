import React, { PropsWithChildren } from "react";
import "../core/assets/styles/index.css";
import {
  DashboardLayoutProps,
  Toaster,
  VokadashContext,
  VokadashQueryProvider,
} from "@/features/_global";
import { RawColors, ThemeProvider } from "@/features/theme";

export interface VokadashProps extends PropsWithChildren {
  appName: string;
  menus: DashboardLayoutProps["menus"];
  usermenus: DashboardLayoutProps["usermenus"];
  colors?: RawColors;
}

const VokadashWithContext = React.memo(
  ({ menus, usermenus, children, appName, ...props }: VokadashProps) => {
    return (
      <VokadashContext.Provider value={{ appName, menus, usermenus }}>
        <ThemeProvider colors={props.colors}>{children}</ThemeProvider>
        <Toaster />
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
