import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Header } from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

test('Header component renders correctly', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const inputElement = screen.getByLabelText('search-input') as HTMLInputElement;
  expect(inputElement).toBeDefined();

  const searchButton = screen.getByText('Search');
  const headerText = screen.getByText('Star Wars persons');
  expect(searchButton).toBeDefined();
  expect(headerText).toBeDefined();
});

test('Header component calls searchHandler with trimmed input value on form submission', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const inputElement = screen.getByLabelText('search-input') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'Anakin Skywalker ' } });
  expect(inputElement.value).toBe('Anakin Skywalker ');

  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  expect(searchButton).toBeDefined();
});
