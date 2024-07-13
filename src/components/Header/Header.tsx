import { useState } from 'react';
import './Header.css';

interface HeaderProps {
  searchTerm: string;
  searchHandler: (value: string) => void;
}

export const Header = (props: HeaderProps) => {
  const { searchTerm, searchHandler } = props;
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchHandler(inputValue.trim());
  };

  return (
    <header className="header">
      <form className="search-form" onSubmit={handleSearch}>
        <label className="search-form__label" htmlFor="search">
          <h3>Star Wars persons</h3>
        </label>
        <input
          className="search-form__input"
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
