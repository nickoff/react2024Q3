import { Component } from 'react';
import './PersonList.css';
import { Person, IPerson } from '../Person/Person';

type PersonState = {
  personList: IPerson[] | [];
  isLoading: boolean;
};

interface PersonListProps {
  searchTerm: string;
}

export class PersonList extends Component<PersonListProps, PersonState> {
  constructor(props: PersonListProps) {
    super(props);

    this.state = {
      personList: [],
      isLoading: false
    };
  }

  private getPersonList = (searchTerm: string) => {
    const param = searchTerm ? `?search=${searchTerm}` : '';
    const apiUrl = `https://swapi.dev/api/people/${param}`;
    this.setState({ isLoading: true });
    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        this.setState({ personList: data.results });
        this.setState({ isLoading: false });
      });
    });
  };

  componentDidMount() {
    this.getPersonList(this.props.searchTerm);
  }

  componentDidUpdate(prevProps: PersonListProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.getPersonList(this.props.searchTerm);
    }
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
