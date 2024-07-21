import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Pagination } from '../components/Pagination/Pagination';
import { BrowserRouter } from 'react-router-dom';

test('Pagination component renders correctly', () => {
  const mockTotalPages = 10;
  render(
    <BrowserRouter>
      <Pagination totalPages={mockTotalPages} />
    </BrowserRouter>
  );

  const component = screen.getByText('1');
  expect(component).toBeDefined;
});
