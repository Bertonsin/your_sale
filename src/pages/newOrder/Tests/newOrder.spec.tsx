import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewOrder from '..';

describe('new Order', () => {
  render(
    <BrowserRouter>
      <NewOrder />
    </BrowserRouter>
  );
});
