import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { NotFound } from '../views/NotFound/NotFound';
import { BrowserRouter } from 'react-router-dom';

test('NotFound component renders correctly', () => {
  render(<NotFound />, { wrapper: BrowserRouter });

  const component = screen.getByText('404: Page not found');
  expect(component).toBeDefined;
});
