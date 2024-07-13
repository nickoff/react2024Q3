import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Main } from '../../views/Main/Main';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} errorElement={<p>Upps</p>} />
      <Route path="*" element={<p>404</p>} />
    </>
  );
  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
