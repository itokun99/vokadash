import React, { PropsWithChildren } from "react";
import { Breadcrumbs, BreadcrumbsProps } from "../breadcrumbs";

export interface DashboardPageLayoutProps extends PropsWithChildren {
  title?: string;
  breadcrumbs?: BreadcrumbsProps["items"];
}

export const DashboardPageLayout = React.memo(
  ({ title, children, breadcrumbs = [] }: DashboardPageLayoutProps) => {
    return (
      <div className="dashboard-page-layout">
        {breadcrumbs?.length > 0 && (
          <div>
            <Breadcrumbs items={breadcrumbs} />
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
