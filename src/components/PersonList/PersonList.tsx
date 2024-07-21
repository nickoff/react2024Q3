import './PersonList.css';
import { Person } from '../PersonCard/PersonCard';
import { useStarWarsApi } from '../../hooks/useStarWarsApi';
import { Pagination } from '../Pagination/Pagination';

interface PersonListProps {
  searchTerm: string;
}

export const PersonList = (props: PersonListProps) => {
  const { searchTerm } = props;
  const { isLoading, personList, numberSearchItems } = useStarWarsApi(searchTerm);
  const totalPages = Math.ceil(numberSearchItems / 10);

  return (
    <>
      {isLoading && <div className="person-list__loader">Loading...</div>}
      {!isLoading && personList.length > 0 && (
        <div className="person-list">
          <div className="person-list__items">
            {personList.map((person, index) => (
              <Person key={index} name={person.name} url={person.url} />
            ))}
          </div>
          <Pagination totalPages={totalPages} />
        </div>
      )}
      {!isLoading && personList.length === 0 && <div className="person-list__loader">No results found</div>}
    </>
  );
};
