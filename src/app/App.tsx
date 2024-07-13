import './App.css';
import { AppRouter } from './AppRouter/AppRouter';
import { Providers } from './Providers/Providers';

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
