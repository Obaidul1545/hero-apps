import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/appDetails/:id',
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
