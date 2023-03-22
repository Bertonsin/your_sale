import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '..';

describe('home screen', () => {
  it('should display a Header and a Banner', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(container).matchSnapshot();
  });
});

describe('home screen buttons', () => {
  it('should be rendered on screen', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getAllByRole('button', { name: /card/i }));
  });
});
