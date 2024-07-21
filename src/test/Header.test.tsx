import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Header } from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

test('Header component renders correctly', () => {
  const searchTerm = 'Luke Skywalker';
  const searchHandler = vi.fn();

  render(
    <BrowserRouter>
      <Header searchTerm={searchTerm} searchHandler={searchHandler} />
    </BrowserRouter>
  );

  const inputElement = screen.getByLabelText('search-input') as HTMLInputElement;
  expect(inputElement).toBeDefined();
  expect(inputElement.value).toBe(searchTerm);

  const searchButton = screen.getByText('Search');
  const headerText = screen.getByText('Star Wars persons');
  expect(searchButton).toBeDefined();
  expect(headerText).toBeDefined();
});

test('Header component calls searchHandler with trimmed input value on form submission', () => {
  const searchTerm = 'Darth Vader';
  const searchHandler = vi.fn();

  render(
    <BrowserRouter>
      <Header searchTerm={searchTerm} searchHandler={searchHandler} />
    </BrowserRouter>
  );

  const inputElement = screen.getByLabelText('search-input') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'Anakin Skywalker ' } });
  expect(inputElement.value).toBe('Anakin Skywalker ');

  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  expect(searchHandler).toHaveBeenCalledWith('Anakin Skywalker');
});
