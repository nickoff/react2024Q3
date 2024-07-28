import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Person } from '../components/PersonCard/PersonCard';
import { Provider } from 'react-redux';
import { store } from '../store';

test('PersonCard component renders correctly', () => {
  const person = {
    name: 'Luke Skywalker',
    url: 'https://swapi.dev/api/people/1/'
  };
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Person name={person.name} url={person.url} />
      </Provider>
    </MemoryRouter>
  );

  const component = screen.getByText(person.name);
  expect(component).toBeDefined;
});
