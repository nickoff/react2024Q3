import { useEffect, useState } from 'react';
import './PersonList.css';
import { Person, PersonProps } from '../PersonCard/PersonCard';

interface PersonListProps {
  searchTerm: string;
}

export const PersonList = (props: PersonListProps) => {
  const { searchTerm } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [personList, setPersonList] = useState<PersonProps[]>([]);

  const getPersonList = (searchTerm: string) => {
    const param = searchTerm ? `?search=${searchTerm}` : '';
    const apiUrl = `https://swapi.dev/api/people/${param}`;
    setIsLoading(true);
    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        setPersonList(data.results);
        setIsLoading(false);
      });
    });
  };

  useEffect(() => {
    getPersonList(searchTerm);
  }, [searchTerm]);

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
