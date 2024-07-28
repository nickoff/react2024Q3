import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Snackbar } from '../components/Snackbar/Snackbar';
import { store } from '../store';
import { Provider } from 'react-redux';

test('Snackbar component renders correctly', () => {
  render(
    <Provider store={store}>
      <Snackbar />
    </Provider>
  );

  const loading = screen.findAllByRole('alert');
  expect(loading).to.exist;
});
