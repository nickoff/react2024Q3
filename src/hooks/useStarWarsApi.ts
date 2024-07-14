import { useEffect, useState } from 'react';
import { PersonProps } from '../components/PersonCard/PersonCard';
import { useParams } from 'react-router-dom';

export const useStarWarsApi = (searchTerm: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [personList, setPersonList] = useState<PersonProps[]>([]);
  const [numberSearchItems, setNumberSearchItems] = useState(0);
  const params = useParams();

  const getPersonList = (searchTerm: string, pageNumber?: string) => {
    const param = searchTerm ? `search=${searchTerm}` : '';
    const page = pageNumber ? `page=${pageNumber}` : '';
    const apiUrl = `https://swapi.dev/api/people/?${param}&${page}`;
    setIsLoading(true);
    fetch(apiUrl).then((response) => {
      response.json().then((data) => {
        setPersonList(data.results);
        setNumberSearchItems(data.count);
        setIsLoading(false);
      });
    });
  };

  useEffect(() => {
    getPersonList(searchTerm, params.pageNumber);
  }, [searchTerm, params.pageNumber]);

  return { isLoading, personList, numberSearchItems };
};
