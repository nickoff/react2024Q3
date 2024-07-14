import { Link, useLoaderData } from 'react-router-dom';
import './PersonDescription.css';

export interface PersonDescription {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  detail?: boolean;
}

export const PersonDescription = () => {
  const { personDescription } = useLoaderData() as { personDescription: PersonDescription };
  console.log(personDescription);
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = personDescription;

  return (
    <div className="person-description">
      <Link className="person-description__back-button" to="/">
        CLOSE
      </Link>

      {personDescription.detail && <p className="person-description__not-found">Not found person</p>}
      {personDescription.name && (
        <>
          <h3>{name}</h3>
          <div>
            <p>Person description:</p>
            <ul>
              <li>height: {height}</li>
              <li>mass: {mass}</li>
              <li>hair color: {hair_color}</li>
              <li>skin color: {skin_color}</li>
              <li>eye color: {eye_color}</li>
              <li>birth year: {birth_year}</li>
              <li>gender: {gender}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
