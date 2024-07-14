import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { PersonList } from '../components/PersonList/PersonList';

test('PersonList component renders correctly', () => {
  render(<PersonList searchTerm="" />);

  const loading = screen.getByText('Loading...');
  expect(loading).toBeDefined;
});
