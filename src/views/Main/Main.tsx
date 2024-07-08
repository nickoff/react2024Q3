import { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { PersonList } from '../../components/PersonList/PersonList';

type MainState = {
  searchTerm: string;
};

export class Main extends Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || ''
    };
  }

  render() {
    const searchHandler = (value: string) => {
      this.setState({ searchTerm: value });
    };

    return (
      <>
        <Header searchHandler={searchHandler} />
        <PersonList searchTerm={this.state.searchTerm} />
      </>
    );
  }
}
