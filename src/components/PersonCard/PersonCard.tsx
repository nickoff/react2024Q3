import { Link, useLocation, useParams } from 'react-router-dom';
import './PesonCard.css';

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

  return (
    <Link
      to={`/${pageNumber}/person/${personId}` === pathname ? `/${pageNumber}` : `/${pageNumber}/person/${personId}`}
      className="person">
      <h3>{name}</h3>
    </Link>
  );
};
