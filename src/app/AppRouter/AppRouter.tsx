import {
  createBrowserRouter,
  createRoutesFromElements,
  LoaderFunction,
  Navigate,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Main } from '../../views/Main/Main';
import { PersonDescription } from '../../components/PersonDescription/PersonDescription';
import { NotFound } from '../../views/NotFound/NotFound';
import { Layout } from '../../views/Layout/Layout';

const getPersonDescription = async (id: string | undefined) => {
  if (!id) return;
  const apiUrl = `https://swapi.dev/api/people/${id}`;
  const response = await fetch(apiUrl);
  const personDescription = await response.json();
  return { personDescription };
};
const loaderPersonDescription: LoaderFunction<{ personDescription: PersonDescription }> = async ({ params }) => {
  return await getPersonDescription(params.id);
};

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/1" />} errorElement={<p>Upps</p>}></Route>
      <Route path="/" element={<Layout />} errorElement={<p>Upps</p>}>
        <Route path="/:pageNumber" element={<Main />} errorElement={<p>Upps</p>}>
          <Route path="person/:id" loader={loaderPersonDescription} element={<PersonDescription />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  );
  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
