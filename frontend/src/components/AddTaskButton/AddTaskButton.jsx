import { memo } from 'react';
import './task-button.css';
import { useNavigate } from 'react-router-dom';

export const AddTaskButton = memo(() => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('task/new');
    };

    return <button onClick={onButtonClick}>Создать задачу</button>;
});

AddTaskButton.displayName = 'AddTaskButton';
