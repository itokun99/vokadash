import { QueryClient } from "@tanstack/react-query";

export const vokadashQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});
