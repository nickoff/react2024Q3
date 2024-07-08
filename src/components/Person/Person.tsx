import { Component } from 'react';
import './Peson.css';

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface PersonProps {
  person: IPerson;
}

export class Person extends Component<PersonProps> {
  private person: IPerson;
  constructor(props: PersonProps) {
    super(props);
    this.person = props.person;
  }
  render() {
    return (
      <div className="person">
        <h3>{this.person.name}</h3>
        <div>
          <p>Person description:</p>
          <ul>
            <li>height: {this.person.height}</li>
            <li>mass: {this.person.mass}</li>
            <li>hair color: {this.person.hair_color}</li>
            <li>skin color: {this.person.skin_color}</li>
            <li>eye color: {this.person.eye_color}</li>
            <li>birth year: {this.person.birth_year}</li>
            <li>gender: {this.person.gender}</li>
          </ul>
        </div>
      </div>
    );
  }
}
