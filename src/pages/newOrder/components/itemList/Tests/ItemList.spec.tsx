import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { describe, vi } from 'vitest';
import { queryClient } from '../../../../../services/queryClient';
import useItemList from '../../../../../hooks/useItemList';
import ItemList from '..';

vi.mock('../../../../../hooks/useItemList', () => ({
  default: vi.fn().mockReturnValue({
    data: [],
    isLoading: false,
    error: null,
  }),
}));

describe('The item list', () => {
  it('should fetch a list of itens', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ItemList />
      </QueryClientProvider>
    );

    expect(useItemList().data).toEqual([]);
    expect(useItemList().isLoading).toBe(false);
    expect(useItemList().error).toBe(null);
    expect(useItemList).toBeCalled();
  });
});
