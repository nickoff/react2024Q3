import { Header } from '../../components/Header/Header';
import { PersonList } from '../../components/PersonList/PersonList';
import { useLocalStorageInitState } from '../../hooks/useLocalStorageInitState';

export const Main = () => {
  const { searchTerm, setSearchTerm } = useLocalStorageInitState();
  console.log(searchTerm);

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
