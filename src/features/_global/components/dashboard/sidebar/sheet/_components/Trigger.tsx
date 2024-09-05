import { Button } from "@/features/_global/libs/shadcn/components/ui/button";
import { SheetTrigger } from "@/features/_global/libs/shadcn/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

export const Trigger = React.memo(() => {
  return (
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
  );
});

Trigger.displayName = "Trigger";
