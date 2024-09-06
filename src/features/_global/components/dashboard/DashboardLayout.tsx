import React, { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";
import { SidebarProps } from "./sidebar/types";
import { UserMenu, UserMenuProps } from "./usermenu";

export interface DashboardLayoutProps extends PropsWithChildren {
  menus: SidebarProps["menus"];
  usermenus: UserMenuProps["menus"];
}

export const DashboardLayout = React.memo(
  ({ menus = [], usermenus, children }: DashboardLayoutProps) => {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar.Default menus={menus} />
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sidebar.Sheet menus={menus} />
            <div className="w-full flex-1">
              {/* <form> */}
              {/*   <div className="relative"> */}
              {/*     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
              {/*     <Input */}
              {/*       type="search" */}
              {/*       placeholder="Search products..." */}
              {/*       className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" */}
              {/*     /> */}
              {/*   </div> */}
              {/* </form> */}
            </div>
            <UserMenu menus={usermenus} />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    );
  },
);

DashboardLayout.displayName = "DashboardLayout";