import { cn } from "@/features/_global/libs/shadcn/lib/utils";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/features/_global/libs/shadcn/components/ui/accordion";
import { NavItemProps, NavProps } from "../types";
import { Icon, SidebarContext } from "@/features/_global";

const NavItem = React.memo((props: NavItemProps) => {
  const sidebarContext = useContext(SidebarContext);

  const hasChild = props.items && props.items?.length > 0;

  if (!hasChild) {
    return (
      <NavLink
        onClick={sidebarContext.setVisible}
        to={props.url || "#"}
        className={(p) =>
          cn(
            " sidebar-nav-item flex gap-3 px-3 py-2 mb-4 items-center rounded-lg border-none hover:bg-muted-foreground/10",
            p.isActive && "bg-muted-foreground/10",
          )
        }
        end
      >
        {props.icon && (
          <Icon
            iconName={props.icon}
            className="sidebar-nav-item-icon h-4 w-4"
          />
        )}
        {props.title}
      </NavLink>
    );
  }

  return (
    <AccordionItem
      value={String(props.value)}
      className="sidebar-nav-accordion border-none"
    >
      <AccordionTrigger className="sidebar-nav-accordion-trigger hover:no-underline py-2 border-none hover:bg-muted-foreground/10 rounded-lg mb-4 px-3">
        <div className="flex gap-3">
          {props.icon && (
            <Icon
              iconName={props.icon}
              className="sidebar-nav-item-icon h-4 w-4"
            />
          )}
          {props.title}
        </div>
      </AccordionTrigger>
      {hasChild && (
        <AccordionContent className="sidebar-nav-submenu bg-mute pl-4">
          {props.items?.map((item, i) => {
            return (
              <NavLink
                key={i}
                onClick={sidebarContext.setVisible}
                to={item.url || "#"}
                className={(p) =>
                  cn(
                    "sidebar-nav-item flex items-center px-3 py-2 mb-2 rounded-lg hover:bg-muted-foreground/10 duration-200 gap-4",
                    p.isActive && "bg-muted-foreground/10",
                  )
                }
              >
                {item.icon && <Icon iconName={item.icon} className="h-4 w-4" />}
                {item.title}
              </NavLink>
            );
          })}
        </AccordionContent>
      )}
    </AccordionItem>
  );
});

export const Nav = React.memo(({ items = [], mobile = false }: NavProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="sidebar-nav grid w-full items-start text-sm font-medium sm:px-4"
      defaultValue="0"
    >
      {items?.map((item, i) => {
        return <NavItem {...item} key={i} value={i} mobile={mobile} />;
      })}
    </Accordion>
  );
});

Nav.displayName = "Nav";
