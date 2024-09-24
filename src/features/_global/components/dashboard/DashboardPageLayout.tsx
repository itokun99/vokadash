import React, { PropsWithChildren } from "react";
import { CustomBreadcrumbs, CustomBreadcrumbsProps } from "../breadcrumbs";

export interface DashboardPageLayoutProps extends PropsWithChildren {
  title?: string;
  breadcrumbs?: CustomBreadcrumbsProps["items"];
}

export const DashboardPageLayout = React.memo(
  ({ title, children, breadcrumbs = [] }: DashboardPageLayoutProps) => {
    return (
      <div className="dashboard-page-layout flex flex-1">
        {breadcrumbs?.length > 0 && (
          <div>
            <CustomBreadcrumbs items={breadcrumbs} />
          </div>
        )}
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
