import { Button } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { it, vi } from 'vitest';
import NewOrder from '..';
import { queryClient } from '../../../services/queryClient';

describe('new Order', () => {
  it('should have a button called "voltar"', async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NewOrder />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(screen.getByRole('button', { name: /Voltar/ })).toBeInTheDocument();
  });

  it('should have a button called "Continuar"', async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NewOrder />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', { name: /Continuar/ })
    ).toBeInTheDocument();
  });
});

describe('The button called "Voltar"', () => {
  it('should call a function to go back', () => {
    const handleGoBack = vi.fn();

    render(<Button onClick={handleGoBack}>Voltar</Button>);
    fireEvent.click(screen.getByRole('button', { name: /Voltar/ }));

    expect(handleGoBack).toBeCalledTimes(1);
  });
});

describe('The button called "continuar"', () => {
  it('should call a function to continue', () => {
    const handleContinue = vi.fn();

    render(<Button onClick={handleContinue}>Continuar</Button>);
    fireEvent.click(screen.getByRole('button', { name: /Continuar/ }));

    expect(handleContinue).toBeCalledTimes(1);
  });
});
