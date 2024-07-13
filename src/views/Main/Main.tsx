import { Header } from '../../components/Header/Header';
import { PersonList } from '../../components/PersonList/PersonList';
import { useStoredState } from '../../hooks/useStoredState';

export const Main = () => {
  const { searchTerm, setSearchTerm } = useStoredState();

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header searchHandler={searchHandler} />
      <PersonList searchTerm={searchTerm} />
    </>
  );
};
