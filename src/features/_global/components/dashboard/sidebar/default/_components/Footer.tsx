import { Button } from "@/features/_global/libs/shadcn/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/features/_global/libs/shadcn/components/ui/card";
import React from "react";

export const Footer = React.memo(() => {
  return (
    <div className="mt-auto p-4">
      <Card x-chunk="dashboard-02-chunk-0">
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
});

Footer.displayName = "Footer";
