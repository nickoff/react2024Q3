import './App.css';
import { Main } from './views/Main/Main';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Fallback } from './views/Fallback/Fallback';

const App = () => {
  return (
    <ErrorBoundary fallback={(handlerReload) => <Fallback reloadCallback={handlerReload} />}>
      <Main />
    </ErrorBoundary>
  );
};

export default App;
