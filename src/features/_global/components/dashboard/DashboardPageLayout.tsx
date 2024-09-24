import React, { PropsWithChildren } from "react";

export interface DashboardPageLayoutProps extends PropsWithChildren {
  title?: string;
}

export const DashboardPageLayout = React.memo(
  ({ title, children }: DashboardPageLayoutProps) => {
    return (
      <div className="dashboard-page-layout">
        {title && (
          <div className="flex items-center">
            <h1 className="dashboard-page-title  text-lg font-semibold md:text-2xl">
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
    );
  },
);
