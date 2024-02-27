"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
