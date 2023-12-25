import { memo } from 'react';
import './task-button.css';
import PropTypes from 'prop-types';

export const AddTaskButton = memo((props) => {
    const { onTaskAdd } = props;

    const onButtonClick = () => {
        onTaskAdd();
    };

    return <button onClick={onButtonClick}>Создать задачу</button>;
});

AddTaskButton.propTypes = {
    onTaskAdd: PropTypes.func,
};

AddTaskButton.displayName = 'AddTaskButton';
