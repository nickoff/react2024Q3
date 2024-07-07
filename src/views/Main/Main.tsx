import { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { PersonList } from '../../components/PersonList/PersonList';

export class Main extends Component {
  state = {
    searchTerm: localStorage.getItem('searchTerm') || ''
  };
  render() {
    return (
      <>
        <Header />
        <PersonList searchTerm={this.state.searchTerm} />
      </>
    );
  }
}
