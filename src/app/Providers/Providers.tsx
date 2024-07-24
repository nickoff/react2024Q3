import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Fallback } from '../../views/Fallback/Fallback';
import { store } from '../../store';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ErrorBoundary fallback={(handlerReload) => <Fallback reloadCallback={handlerReload} />}>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
};
