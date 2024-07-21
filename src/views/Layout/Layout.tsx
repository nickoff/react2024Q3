import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { useGetStoredState } from '../../hooks/useGetStoredState';
import './Layout.css';
import { createContext } from 'react';

export const SearchContext = createContext('');

export const Layout = () => {
  const { searchTerm, setSearchTerm } = useGetStoredState();

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <SearchContext.Provider value={searchTerm}>
      <Header searchTerm={searchTerm} searchHandler={searchHandler} />
      <div className="layout">
        <Outlet />
      </div>
    </SearchContext.Provider>
  );
};
