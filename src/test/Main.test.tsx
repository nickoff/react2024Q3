import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Main } from '../views/Main/Main';
import { Provider } from 'react-redux';
import { store } from '../store';

test('Main component renders correctly', () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  const mainComponent = screen.getByRole('main');
  expect(mainComponent).toBeDefined();
});
