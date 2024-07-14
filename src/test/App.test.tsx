import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../app/App';

test('App component renders correctly', () => {
  render(<App />);

  const appComponent = screen.getByRole('heading', { name: 'Star Wars persons' });
  expect(appComponent).toBeDefined;
});
