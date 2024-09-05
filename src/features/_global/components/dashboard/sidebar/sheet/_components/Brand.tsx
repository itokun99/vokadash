import { useVokadashContext } from "@/features/_global/hooks";
import { Package2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Brand = React.memo(() => {
  const appContext = useVokadashContext();
  return (
    <Link to="#" className="flex items-center gap-2 text-lg font-semibold">
      <Package2 className="h-6 w-6" />
      <span className="sr-only">{appContext.appName}</span>
    </Link>
  );
});

Brand.displayName = "Brand";
