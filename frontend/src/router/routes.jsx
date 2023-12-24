import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import LoginPage from '../pages/Login';
import { TaskPage } from '../pages/Task/task.page';
import { RequireAuth } from './RequireAuth';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <RequireAuth>
                <MainPage />
            </RequireAuth>
        ),
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/task/:id',
        element: (
            <RequireAuth>
                <TaskPage />
            </RequireAuth>
        ),
    },
]);

export default router;
