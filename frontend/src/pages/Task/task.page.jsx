import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { AddTaskForm } from '../../components/AddTaskForm/AddTaskForm';

export const TaskPage = memo(() => {
    const { id } = useParams();

    if (id === 'new') {
        return <AddTaskForm />;
    }

    return <h1>Страница задачи {id}</h1>;
});

TaskPage.displayName = 'Taskpage';
