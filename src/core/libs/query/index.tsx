import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});

export const MatadorDashQuery = React.memo(
  ({ children }: PropsWithChildren) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  },
);
