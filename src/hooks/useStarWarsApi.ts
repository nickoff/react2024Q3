import { useEffect, useState } from 'react';
import { PersonProps } from '../components/PersonCard/PersonCard';

export const useStarWarsApi = (searchTerm: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [personList, setPersonList] = useState<PersonProps[]>([]);

  const getPersonList = (searchTerm: string) => {
    const param = searchTerm ? `?search=${searchTerm}` : '';
    const apiUrl = `https://swapi.dev/api/people/${param}`;
    setIsLoading(true);
    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        setPersonList(data.results);
        setIsLoading(false);
      });
    });
  };

  useEffect(() => {
    getPersonList(searchTerm);
  }, [searchTerm]);

  return { isLoading, personList };
};
