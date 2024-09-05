import { cn } from "@/features/_global/libs/shadcn/lib/utils";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemProps, NavProps } from "../../types";

const NavItem = React.memo((props: NavItemProps) => {
  const Icon = props.icon;
  return (
    <NavLink
      to={props.url || "#"}
      className={(p) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          p.isActive && "text-primary bg-muted",
        )
      }
      end
    >
      {Icon && <Icon className="h-4 w-4" />}
      {props.title}
    </NavLink>
  );
});

export const Nav = React.memo(({ items = [] }: NavProps) => {
  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {items?.map((item, i) => {
          return <NavItem {...item} key={i} />;
        })}
      </nav>
    </div>
  );
});

Nav.displayName = "Nav";
