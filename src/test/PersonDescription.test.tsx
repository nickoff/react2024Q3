import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { PersonDescription } from '../components/PersonDescription/PersonDescription';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

test('PersonDescription component renders loading state', () => {
  render(
    <MemoryRouter initialEntries={['/1/1']}>
      <Provider store={store}>
        <Routes>
          <Route path="/:pageNumber/:id" element={<PersonDescription />} />
        </Routes>
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByText('Loading...')).toBeDefined();
});
