/* eslint-disable import/prefer-default-export */
import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});
