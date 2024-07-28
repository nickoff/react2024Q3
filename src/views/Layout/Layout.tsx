import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import './Layout.css';
import { createContext, useState } from 'react';
import { Snackbar } from '../../components/Snackbar/Snackbar';

interface ThemeContext {
  darkTheme: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  darkTheme: true,
  changeTheme: () => {}
});

export const Layout = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
      <div className={darkTheme ? 'layout dark' : 'layout'}>
        <div className="outlet__wrapper">
          <Header />
          <div className="outlet">
            <Outlet />
          </div>
          <Snackbar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
