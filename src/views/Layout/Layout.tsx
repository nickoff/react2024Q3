import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import './Layout.css';
import { createContext } from 'react';

export const ThemeContext = createContext('');

export const Layout = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
      <div className="layout">
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};
