import { IconProps } from "@/features/_global";
import { To } from "react-router-dom";

export interface NavItemProps {
  title?: string;
  icon?: IconProps["iconName"];
  url?: To;
  value?: number | string;
  items?: NavItemProps[];
}

export interface NavProps {
  items: NavItemProps[];
  className?: string;
}

export interface SidebarProps {
  menus: NavProps["items"];
  className?: string;
}
