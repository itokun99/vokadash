import {
  Sheet,
  SheetContent,
} from "@/features/_global/libs/shadcn/components/ui/sheet";
import React from "react";
import { Brand } from "./_components/Brand";
import { Trigger } from "./_components/Trigger";
import { SidebarProps } from "../types";
import { Nav } from "../_components/Nav";
import { useSidebarContext } from "@/features/_global/hooks";

export const SheetSidebar = React.memo((props: SidebarProps) => {
  const sidebarContext = useSidebarContext();
  return (
    <Sheet open={sidebarContext.visible}>
      <Trigger />
      <SheetContent
        onPressClose={sidebarContext.setVisible}
        side="left"
        className="flex flex-col"
      >
        <nav className="grid gap-2 text-lg font-medium">
          <Brand />
          <Nav items={props.menus} mobile />
        </nav>
        {/* <Footer /> */}
      </SheetContent>
    </Sheet>
  );
});

SheetSidebar.displayName = "SheetSidebar";
