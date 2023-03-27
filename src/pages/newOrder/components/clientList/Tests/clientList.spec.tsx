import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { describe, vi } from 'vitest';
import ClientList from '..';
import { queryClient } from '../../../../../services/queryClient';
import useClientList from '../../../../../hooks/useClientList';

vi.mock('../../../../../hooks/useClientList', () => ({
  default: vi.fn().mockReturnValue({
    data: [],
    isLoading: false,
    error: null,
  }),
}));

describe('The client list', () => {
  it('should fetch a list of clients', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ClientList />
      </QueryClientProvider>
    );

    expect(useClientList().data).toEqual([]);
    expect(useClientList().isLoading).toBe(false);
    expect(useClientList().error).toBe(null);
    expect(useClientList).toBeCalled();
  });
});
