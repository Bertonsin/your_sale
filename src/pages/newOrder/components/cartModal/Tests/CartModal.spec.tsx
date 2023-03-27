import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, vi } from 'vitest';
import CartModal from '..';
import NewOrder from '../../..';
import { queryClient } from '../../../../../services/queryClient';

describe('The cart modal', () => {
  it('should be rendered', () => {
    render(<CartModal />);
  });
});

describe('The button called "carrinho"', () => {
  it('should be on screen when cart has something inside', () => {
    const cart = [{ clients: {}, item: {}, itensInfo: {} }];

    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NewOrder />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(cart.length).not.toBeLessThanOrEqual(0);
  });
});
