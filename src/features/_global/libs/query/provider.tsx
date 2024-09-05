import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { vokadashQueryClient } from "./client";

export const VokadashQueryProvider = React.memo(
  ({ children }: PropsWithChildren) => {
    return (
      <QueryClientProvider client={vokadashQueryClient}>
        {children}
      </QueryClientProvider>
    );
  },
);
