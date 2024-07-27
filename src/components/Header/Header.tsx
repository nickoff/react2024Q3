import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setNewSearchValue } from '../../store/reducers/search';

export const Header = () => {
  const searchTerm = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = (event.target.elements[0] as HTMLInputElement).value.trim();
    dispatch(setNewSearchValue(inputValue));
    localStorage.setItem('searchTerm', inputValue);
    navigate('/1');
  };

  return (
    <header className="header">
      <form className="search-form" role="form" onSubmit={handleSearch}>
        <label className="search-form__label" htmlFor="search">
          <h3>Star Wars persons</h3>
        </label>
        <input
          className="search-form__input"
          aria-label="search-input"
          type="text"
          name="search"
          id="search"
          defaultValue={searchTerm}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
