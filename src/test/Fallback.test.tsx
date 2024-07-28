import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Fallback } from '../views/Fallback/Fallback';

test('Fallback component renders correctly', () => {
  const handlerReload = vi.fn();
  render(<Fallback reloadCallback={handlerReload} />);

  const component = screen.getByText('Ups... 😟 Something went wrong!');
  expect(component).toBeDefined;
});
