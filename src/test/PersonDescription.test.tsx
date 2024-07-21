import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { PersonDescription } from '../components/PersonDescription/PersonDescription';

test('PersonDescription component renders correctly', () => {
  const personDescription = {
    name: 'Luke Skywalker',
    height: '172 cm',
    mass: '77 kg',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male'
  };

  const routes = [
    {
      path: '1/person/:id',
      element: <PersonDescription />,
      loader: () => {
        return { personDescription };
      }
    }
  ];

  const router = createMemoryRouter(routes, { initialEntries: ['/1/person/1'] });

  render(<RouterProvider router={router} />);

  const nameElement = screen;
  expect(nameElement).toBeDefined;
});
