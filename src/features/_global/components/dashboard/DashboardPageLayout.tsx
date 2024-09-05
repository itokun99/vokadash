import React, { PropsWithChildren } from "react";

export interface DashboardPageLayoutProps extends PropsWithChildren {
  title?: string;
}

export const DashboardPageLayout = React.memo(
  ({ title, children }: DashboardPageLayoutProps) => {
    return (
      <>
        {title && (
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
          </div>
        )}
        {children}
      </>
    );
  },
);
