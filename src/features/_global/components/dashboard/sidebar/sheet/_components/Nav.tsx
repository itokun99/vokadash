import { cn } from "@/features/_global/libs/shadcn/lib/utils";
import {
  Home,
  ShoppingCart,
  Badge,
  Package,
  Users,
  LineChart,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavItemProps, NavProps } from "../../types";

const NavItem = React.memo((props: NavItemProps) => {
  const Icon = props.icon;
  return (
    <NavLink
      to={props.url || "#"}
      className={(p) =>
        cn(
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
          p.isActive && "bg-muted text-foreground",
        )
      }
      end
    >
      {Icon && <Icon className="h-5 w-5" />}
      {props.title}
    </NavLink>
  );
});

export const Nav = React.memo(({ items = [] }: NavProps) => {
  return <>{items?.map((item) => <NavItem {...item} />)}</>;
});

Nav.displayName = "Nav";
