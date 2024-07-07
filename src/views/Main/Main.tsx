import { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { PersonList } from '../../components/PersonList/PersonList';

export class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <PersonList />
      </>
    );
  }
}
