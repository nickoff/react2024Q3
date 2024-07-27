import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { Main } from '../../views/Main/Main';
import { PersonDescription } from '../../components/PersonDescription/PersonDescription';
import { NotFound } from '../../views/NotFound/NotFound';
import { Layout } from '../../views/Layout/Layout';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/1" />} errorElement={<NotFound />}></Route>
      <Route path="/" element={<Layout />} errorElement={<p>Upps</p>}>
        <Route path="/:pageNumber" element={<Main />} errorElement={<NotFound />}>
          <Route path="person/:id" element={<PersonDescription />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  );
  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
