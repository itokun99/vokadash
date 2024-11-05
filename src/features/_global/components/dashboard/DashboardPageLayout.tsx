import React, { PropsWithChildren } from "react";
import { CustomBreadcrumbs, CustomBreadcrumbsProps } from "../breadcrumbs";
import { VokadashHead } from "../../libs";

export interface DashboardPageLayoutProps extends PropsWithChildren {
  title?: string;
  breadcrumbs?: CustomBreadcrumbsProps["items"];
  siteTitle?: string;
}

export const DashboardPageLayout = React.memo(
  ({
    title,
    children,
    breadcrumbs = [],
    siteTitle,
  }: DashboardPageLayoutProps) => {
    return (
      <>
        {siteTitle && (
          <VokadashHead>
            <title>{siteTitle}</title>
          </VokadashHead>
        )}

        <div className="dashboard-page-layout flex flex-1 flex-col">
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
      </>
    );
  },
);
