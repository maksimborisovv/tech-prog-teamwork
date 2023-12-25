import { memo, useState } from 'react';
import './subtask-form.css';
import PropTypes from 'prop-types';

export const AddSubTaskForm = memo((props) => {
    const { onTaskAdd } = props;
    const [description, setDescription] = useState('');

    const onButtonClick = () => {
        onTaskAdd(description);
    };

    return (
        <div className="subtask-form">
            <input
                className="subtask-form__input"
                placeholder="Текст подзадачи"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={onButtonClick} disabled={!description}>
                Добавить подзадачу
            </button>
        </div>
    );
});

AddSubTaskForm.propTypes = {
    onTaskAdd: PropTypes.func,
};

AddSubTaskForm.displayName = 'AddSubTaskForm';
