import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export const ReactQueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {/* {process.env.NODE_ENV === 'development' && (
      <ReactQueryDevtools initialIsOpen={false} />
    )} */}
  </QueryClientProvider>
);
