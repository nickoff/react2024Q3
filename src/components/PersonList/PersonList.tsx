import './PersonList.css';
import { Person } from '../PersonCard/PersonCard';
import { useStarWarsApi } from '../../hooks/useStarWarsApi';
import { NavLink } from 'react-router-dom';

interface PersonListProps {
  searchTerm: string;
}

export const PersonList = (props: PersonListProps) => {
  const { searchTerm } = props;
  const { isLoading, personList, numberSearchItems } = useStarWarsApi(searchTerm);
  const pages = Array.from({ length: Math.ceil(numberSearchItems / 10) }).map((_, index) => `${index + 1}`);
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

          {pages.length > 0 && (
            <ul className="person-list__pages">
              {pages.map((page) => (
                <li key={page}>
                  <NavLink to={`/${page}`}>{page}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {!isLoading && personList.length === 0 && <div className="person-list__loader">No results found</div>}
    </>
  );
};
