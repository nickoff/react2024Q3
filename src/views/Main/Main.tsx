import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PersonList } from '../../components/PersonList/PersonList';
import { useStoredState } from '../../hooks/useStoredState';
import './Main.css';

export const Main = () => {
  const { searchTerm, setSearchTerm } = useStoredState();

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header searchTerm={searchTerm} searchHandler={searchHandler} />
      <div className="main">
        <PersonList searchTerm={searchTerm} />
        <Outlet />
      </div>
    </>
  );
};
