import React, { PropsWithChildren } from "react";

const bg =
  "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export interface AuthLayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  image?: string;
  logo?: string;
}

export const AuthLayout = ({
  description,
  title,
  children,
  image,
  logo,
}: AuthLayoutProps) => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 px-4">
          {logo && (
            <div className="w-full flex-1">
              <img className="w-full" src={logo} />
            </div>
          )}

          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-balance text-muted-foreground">{description}</p>
          </div>
          {children}
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={image || bg}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
