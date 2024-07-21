import { LoaderFunction } from 'react-router-dom';
import { PersonDescription } from '../../../components/PersonDescription/PersonDescription';

const getPersonDescription = async (id: string | undefined) => {
  if (!id) return;
  const apiUrl = `https://swapi.dev/api/people/${id}`;
  const response = await fetch(apiUrl);
  const personDescription = await response.json();
  return { personDescription };
};

export const loaderPersonDescription: LoaderFunction<{ personDescription: PersonDescription }> = async ({ params }) => {
  return await getPersonDescription(params.id);
};
