import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Person } from '../components/PersonCard/PersonCard';

test('PersonCard component renders correctly', () => {
  const person = {
    name: 'Luke Skywalker',
    url: 'https://swapi.dev/api/people/1/'
  };
  render(<Person name={person.name} url={person.url} />, { wrapper: MemoryRouter });

  const component = screen.getByText(person.name);
  expect(component).toBeDefined;
});
