import React from "react";
import { Brand } from "./_components/Brand";
import { SidebarProps } from "../types";
import { Nav } from "../_components/Nav";
import { cn } from "@/features/_global/libs";

export const DefaultSidebar = React.memo((props: SidebarProps) => {
  return (
    <div
      className={cn(
        "sidebar sidebar-default",
        "hidden border-r bg-theme-color-secondary3 md:block",
        props.className,
      )}
    >
      <div className=" sidebar-content flex h-full max-h-screen flex-col gap-2">
        <Brand />
        <Nav items={props.menus} />
      </div>
    </div>
  );
});

DefaultSidebar.displayName = "DashboardSidebar";
