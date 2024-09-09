import { SidebarContext } from "@/features/_global/context";
import { Button } from "@/features/_global/libs/shadcn/components/ui/button";
import { Menu } from "lucide-react";
import React, { useContext } from "react";

export const Trigger = React.memo(() => {
  const sidebarContext = useContext(SidebarContext);

  return (
    <Button
      type="button"
      onClick={sidebarContext.setVisible}
      variant="outline"
      size="icon"
      className="shrink-0 md:hidden"
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle navigation menu</span>
    </Button>
  );
});

Trigger.displayName = "Trigger";
