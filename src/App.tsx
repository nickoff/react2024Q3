import { Component } from 'react';
import './App.css';
import { Main } from './views/Main/Main';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Fallback } from './views/Fallback/Fallback';

class App extends Component {
  render() {
    return (
      <ErrorBoundary fallback={(handlerReload) => <Fallback reloadCallback={handlerReload} />}>
        <Main />
      </ErrorBoundary>
    );
  }
}

export default App;
