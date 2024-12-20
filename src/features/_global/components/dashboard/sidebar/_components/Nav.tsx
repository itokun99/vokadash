import { cn } from "@/features/_global/libs/shadcn/lib/utils";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavItemProps, NavProps } from "../types";
import { Icon, SidebarContext } from "@/features/_global";
import { ChevronDown, ChevronRight } from "lucide-react";

const NavItem = React.memo((props: NavItemProps) => {
  const [visibleChild, setVisibleChild] = useState(false);

  const sidebarContext = useContext(SidebarContext);

  const handleClick = () => {
    if (!hasChild) return sidebarContext.setVisible();
    setVisibleChild((v) => !v);
  };

  const hasChild = props.items && props.items?.length > 0;

  return (
    <li className="relative">
      <NavLink
        onClick={handleClick}
        to={hasChild ? "#" : props.url || "#"}
        className={(p) =>
          cn(
            " sidebar-nav-item flex gap-3 px-3 py-2 mb-4 items-center rounded-lg border-none hover:bg-theme-color-info justify-between text-sm",
            p.isActive && "bg-theme-color-info",
          )
        }
        end
      >
        <div className="flex flex-row items-center gap-2">
          {props.icon && (
            <Icon
              iconName={props.icon}
              className="sidebar-nav-item-icon h-4 w-4"
            />
          )}
          {props.title}
        </div>
        {hasChild &&
          (visibleChild ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          ))}
      </NavLink>

      {hasChild && visibleChild && (
        <Nav isChild items={props.items || []} mobile={props.mobile} />
      )}
    </li>
  );
});

export const Nav = React.memo(
  ({ items = [], mobile = false, isChild }: NavProps) => {
    return (
      <ul className={cn(isChild && "pl-4")}>
        {items?.map((item) => {
          return <NavItem {...item} mobile={mobile} />;
        })}
      </ul>
    );
  },
);

Nav.displayName = "Nav";
