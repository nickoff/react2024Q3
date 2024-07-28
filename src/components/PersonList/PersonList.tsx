import './PersonList.css';
import { Person } from '../PersonCard/PersonCard';
import { Pagination } from '../Pagination/Pagination';
import { useAppSelector } from '../../store/hooks';
import { useGetPersonListQuery } from '../../store/reducers/apiService';
import { useParams } from 'react-router-dom';

export const PersonList = () => {
  const searchTerm = useAppSelector((state) => state.search.value);
  const params = useParams();
  const { data, isFetching } = useGetPersonListQuery({ searchTerm, pageNumber: params.pageNumber });
  if (!data) return;
  const totalPages = Math.ceil(data.count / 10);

  return (
    <>
      {isFetching && <div className="person-list__loader">Loading...</div>}
      {!isFetching && data.results.length > 0 && (
        <div className="person-list">
          <div className="person-list__items">
            {data.results.map((person, index) => (
              <Person key={index} name={person.name} url={person.url} />
            ))}
          </div>
          <Pagination totalPages={totalPages} />
        </div>
      )}
      {!isFetching && data.results.length === 0 && <div className="person-list__loader">No results found</div>}
    </>
  );
};
