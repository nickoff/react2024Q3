import './PesonCard.css';

export interface PersonProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const Person = (props: PersonProps) => {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = props;

  return (
    <div className="person">
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
    </div>
  );
};
