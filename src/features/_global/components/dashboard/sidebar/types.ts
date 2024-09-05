import { To } from "react-router-dom";

export interface NavItemProps {
  title?: string;
  icon?: React.ElementType;
  url?: To;
}

export interface NavProps {
  items: NavItemProps[];
}

export interface SidebarProps {
  menus: NavProps["items"];
}
