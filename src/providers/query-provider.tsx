/** @format */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { QUERY_CONFIG } from '../constants/query';

interface QueryProviderProps {
  children: ReactNode;
}

/**
 * Provider component for TanStack Query
 *
 * @param {QueryProviderProps} props - Component props containing children
 * @returns {JSX.Element} Provider wrapped application
 */
export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: QUERY_CONFIG.STALE_TIME,
            retry: QUERY_CONFIG.RETRY_COUNT,
            refetchOnWindowFocus: QUERY_CONFIG.REFETCH_ON_WINDOW_FOCUS,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
