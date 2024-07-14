import { Link, useLocation } from 'react-router-dom';
import './PesonCard.css';

export interface PersonProps {
  name: string;
  url: string;
}

export const Person = (props: PersonProps) => {
  const { pathname } = useLocation();
  const { name, url } = props;
  const personId = url.split('/').reverse()[1];

  return (
    <Link to={`/person/${personId}` === pathname ? '/' : `/person/${personId}`} className="person">
      <h3>{name}</h3>
    </Link>
  );
};
