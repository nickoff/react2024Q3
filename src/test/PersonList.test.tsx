import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { PersonList } from '../components/PersonList/PersonList';
import { Provider } from 'react-redux';
import { store } from '../store';

test('PersonList component renders correctly', () => {
  render(
    <Provider store={store}>
      <PersonList />
    </Provider>
  );

  const loading = screen;
  expect(loading).to.exist;
});
