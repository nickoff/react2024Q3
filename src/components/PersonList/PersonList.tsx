import './PersonList.css';
import { Person } from '../PersonCard/PersonCard';
import { useStarWarsApi } from '../../hooks/useStarWarsApi';

interface PersonListProps {
  searchTerm: string;
}

export const PersonList = (props: PersonListProps) => {
  const { searchTerm } = props;
  const { isLoading, personList } = useStarWarsApi(searchTerm);

  return (
    <>
      {isLoading && <div className="person-list__loader">Loading...</div>}
      {!isLoading && personList.length > 0 && (
        <div className="person-list">
          {personList.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              birth_year={person.birth_year}
              gender={person.gender}
              height={person.height}
              hair_color={person.hair_color}
              skin_color={person.skin_color}
              eye_color={person.eye_color}
              mass={person.mass}
            />
          ))}
        </div>
      )}
      {!isLoading && personList.length === 0 && <div className="person-list__loader">No results found</div>}
    </>
  );
};
