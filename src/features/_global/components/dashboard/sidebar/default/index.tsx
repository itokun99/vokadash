import React from "react";
import { Brand } from "./_components/Brand";
import { Nav } from "./_components/Nav";
// import { Footer } from "./_components/Footer";
import { SidebarProps } from "../types";

export const DefaultSidebar = React.memo((props: SidebarProps) => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <Brand />
        <Nav items={props.menus} />
        {/* <Footer /> */}
      </div>
    </div>
  );
});

DefaultSidebar.displayName = "DashboardSidebar";
