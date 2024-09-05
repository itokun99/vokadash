import { Button } from "@/features/_global/libs/shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/features/_global/libs/shadcn/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import React from "react";
import { Link, To } from "react-router-dom";

export interface UserMenuItem {
  title?: string;
  separator?: boolean;
  label?: boolean;
  url?: To;
}

export interface UserMenuProps {
  menus: UserMenuItem[];
}

export const UserMenu = React.memo(({ menus = [] }: UserMenuProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        {menus && menus?.length > 0 && (
          <DropdownMenuContent align="end">
            {menus?.map((menu, i) => {
              if (menu.separator) {
                return <DropdownMenuSeparator key={i} />;
              }

              if (menu.label) {
                return (
                  <DropdownMenuLabel key={i}>{menu.title}</DropdownMenuLabel>
                );
              }
              return (
                <DropdownMenuItem asChild key={i}>
                  <Link to={menu.url || "#"}>{menu.title}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </>
  );
});
