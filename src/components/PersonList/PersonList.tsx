import { useEffect, useState } from 'react';
import './PersonList.css';
import { Person, IPerson } from '../Person/Person';

interface PersonListProps {
  searchTerm: string;
}

export const PersonList = (props: PersonListProps) => {
  const { searchTerm } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [personList, setPersonList] = useState<IPerson[]>([]);

  console.log(searchTerm);

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
            <Person key={index} person={person} />
          ))}
        </div>
      )}
      {!isLoading && personList.length === 0 && <div className="person-list__loader">No results found</div>}
    </>
  );
};
