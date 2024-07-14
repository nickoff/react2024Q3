import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Header } from '../components/Header/Header';

test('Header component renders correctly', () => {
  render(<Header searchTerm="" searchHandler={() => {}} />);

  const searchButton = screen.getByText('Search');
  const headerText = screen.getByText('Star Wars persons');
  expect(searchButton).toBeDefined;
  expect(headerText).toBeDefined;
});
