import { createBrowserRouter, createRoutesFromElements, LoaderFunction, Route, RouterProvider } from 'react-router-dom';
import { Main } from '../../views/Main/Main';
import { PersonDescription } from '../../components/PersonDescription/PersonDescription';

const getPersonDescription = async (id: string | undefined) => {
  if (!id) return;
  const apiUrl = `https://swapi.dev/api/people/${id}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
const loaderPersonDescription: LoaderFunction<{ personDescription: PersonDescription }> = async ({ params }) => {
  const personDescription = await getPersonDescription(params.id);
  return { personDescription };
};

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} errorElement={<p>Upps</p>}>
        <Route path="person/:id" loader={loaderPersonDescription} element={<PersonDescription />} />
      </Route>
      <Route path="*" element={<p>404</p>} />
    </>
  );
  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
