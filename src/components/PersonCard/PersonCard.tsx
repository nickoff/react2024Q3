import { Link, useLocation, useParams } from 'react-router-dom';
import './PesonCard.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addSelectPerson, deleteSelectPerson } from '../../store/reducers/selectedPerson';

export interface PersonProps {
  name: string;
  url: string;
}

export const Person = (props: PersonProps) => {
  const { pathname } = useLocation();
  const params = useParams();
  const { name, url } = props;
  const pageNumber = params.pageNumber ? params.pageNumber : '1';
  const personId = url.split('/').reverse()[1];
  const dispatch = useAppDispatch();
  const selectedPersons = useAppSelector((state) => state.selectedPerson.selectedPerson);

  const checkHandler = () => {
    if (!selectedPersons.includes(personId)) {
      dispatch(addSelectPerson(personId));
    } else {
      dispatch(deleteSelectPerson(personId));
    }
  };

  return (
    <div className="person">
      <Link
        to={`/${pageNumber}/person/${personId}` === pathname ? `/${pageNumber}` : `/${pageNumber}/person/${personId}`}>
        <h3>{name}</h3>
      </Link>
      <input
        className="person-checkbox"
        type="checkbox"
        checked={selectedPersons.includes(personId)}
        onChange={checkHandler}
      />
    </div>
  );
};
