import { memo } from 'react';
import PropTypes from 'prop-types';
import './task-button.css';

export const DeleteTaskButton = memo((props) => {
    const { onTaskDelete } = props;

    const onButtonClick = () => {
        onTaskDelete();
    };

    return <button onClick={onButtonClick}>Удалить задачу</button>;
});

DeleteTaskButton.propTypes = {
    onTaskDelete: PropTypes.func,
};

DeleteTaskButton.displayName = 'AddTDeleteTaskButtonaskButton';
