import { Component } from 'react';
import './PersonList.css';
import { Person, PersonProps } from '../Person/Person';

type PersonState = {
  personList: PersonProps[] | [];
  isLoading: boolean;
};

export class PersonList extends Component<unknown, PersonState> {
  state = {
    personList: [],
    isLoading: false
  };

  componentDidMount() {
    const prevSearchTerm = localStorage.getItem('searchTerm');
    const param = prevSearchTerm ? `?search=${prevSearchTerm}` : '';
    const apiUrl = `https://swapi.dev/api/people/${param}`;

    this.setState({ isLoading: true });
    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        this.setState({ personList: data.results });
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    return (
      <>
        {this.state.isLoading && <div className="person-list__loader">Loading...</div>}
        {!this.state.isLoading && (
          <div className="person-list">
            {this.state.personList &&
              this.state.personList.map((person, index) => <Person key={index} person={person} />)}
          </div>
        )}
      </>
    );
  }

  componentWillUnmount() {
    this.setState({ personList: [] });
  }
}
