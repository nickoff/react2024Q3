import { Component } from 'react';
import './Header.css';

interface HeaderPropsState {
  error: boolean;
}

export class Header extends Component<unknown, HeaderPropsState> {
  constructor(props: unknown) {
    super(props);
    this.state = { error: false };
  }

  render() {
    const handlerCallError = () => {
      this.setState({ error: true });
    };

    if (this.state.error) {
      throw new Error('Call an error in Header');
    }

    return (
      <header className="header">
        <form className="search-form">
          <label className="search-form__label" htmlFor="search">
            <h3>Search</h3>
          </label>
          <input className="search-form__input" type="text" name="search" id="search" />
          <button className="search-form__button" type="button">
            Search
          </button>
        </form>
        <button className="error-button" onClick={handlerCallError}>
          Call an error
        </button>
      </header>
    );
  }
}
