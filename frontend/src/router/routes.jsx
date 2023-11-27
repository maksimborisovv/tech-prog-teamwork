import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import LoginPage from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
