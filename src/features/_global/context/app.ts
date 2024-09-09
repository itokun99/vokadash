import { createContext } from "react";
import { DashboardLayoutProps } from "../components";

export interface VokadashContextValue {
  appName: string;
  menus: DashboardLayoutProps["menus"];
  usermenus: DashboardLayoutProps["usermenus"];
}

const vokadashContextDefaultValue: VokadashContextValue = {
  appName: "",
  menus: [],
  usermenus: [],
};

export const VokadashContext = createContext(vokadashContextDefaultValue);

export interface SidebarContextValue {
  visible: boolean;
  setVisible: () => void;
}

const sidebarContextDefaultValue: SidebarContextValue = {
  visible: false,
  setVisible: () => {},
};

export const SidebarContext = createContext(sidebarContextDefaultValue);
