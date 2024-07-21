import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Main } from '../views/Main/Main';

test('Main component renders correctly', () => {
  render(<Main />);

  const mainComponent = screen.getByText('Loading...');
  expect(mainComponent).to.exist;
});
