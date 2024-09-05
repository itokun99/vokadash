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
    <div className="mt-auto">
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
});

Footer.displayName = "Footer";
