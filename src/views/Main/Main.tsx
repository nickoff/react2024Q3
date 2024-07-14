import { Outlet } from 'react-router-dom';
import { PersonList } from '../../components/PersonList/PersonList';
import './Main.css';
import { useContext } from 'react';
import { SearchContext } from '../Layout/Layout';

export const Main = () => {
  const searchTerm = useContext(SearchContext);

  return (
    <>
      <div className="main">
        <PersonList searchTerm={searchTerm} />
        <Outlet />
      </div>
    </>
  );
};
