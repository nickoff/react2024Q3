import { Link, useParams } from 'react-router-dom';
import './PersonDescription.css';
import { useGetPersonByIdQuery } from '../../store/reducers/apiService';

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
  url?: string;
}

export const PersonDescription = () => {
  const { pageNumber, id } = useParams();
  const { data, error, isLoading } = useGetPersonByIdQuery(id);

  return (
    <div className="person-description">
      {isLoading && <div className="person-description__loader">Loading...</div>}
      {!isLoading && (
        <>
          <Link className="person-description__back-button" to={'/' + pageNumber}>
            CLOSE
          </Link>

          {error && <p className="person-description__not-found">Not found person</p>}
          {data && (
            <>
              <h3>{data?.name}</h3>
              <div>
                <p>Person description:</p>
                <ul>
                  <li>height: {data?.height}</li>
                  <li>mass: {data?.mass}</li>
                  <li>hair color: {data?.hair_color}</li>
                  <li>skin color: {data?.skin_color}</li>
                  <li>eye color: {data?.eye_color}</li>
                  <li>birth year: {data?.birth_year}</li>
                  <li>gender: {data?.gender}</li>
                </ul>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
