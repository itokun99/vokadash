import React, { PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const VokadashHelmetProvider = (props: PropsWithChildren) => {
  return <HelmetProvider>{props.children}</HelmetProvider>;
};

export const VokadashHead = (props: PropsWithChildren) => {
  return <Helmet>{props.children}</Helmet>;
};
