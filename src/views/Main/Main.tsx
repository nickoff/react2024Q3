import { Outlet } from 'react-router-dom';
import { PersonList } from '../../components/PersonList/PersonList';
import './Main.css';

export const Main = () => {
  return (
    <>
      <div className="main">
        <PersonList />
        <Outlet />
      </div>
    </>
  );
};
