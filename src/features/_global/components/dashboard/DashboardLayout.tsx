import React, { PropsWithChildren, useState } from "react";
import { Sidebar } from "./sidebar";
import { SidebarProps } from "./sidebar/types";
import { UserMenu, UserMenuProps } from "./usermenu";
import { SidebarContext } from "../../context";

export interface DashboardLayoutProps extends PropsWithChildren {
  menus: SidebarProps["menus"];
  usermenus: UserMenuProps["menus"];
}

export const DashboardLayout = React.memo(
  ({ menus = [], usermenus, children }: DashboardLayoutProps) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar.Default menus={menus} />
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <SidebarContext.Provider
              value={{
                visible: sidebarVisible,
                setVisible: () => setSidebarVisible((v) => !v),
              }}
            >
              <Sidebar.Sheet menus={menus} />
            </SidebarContext.Provider>
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
