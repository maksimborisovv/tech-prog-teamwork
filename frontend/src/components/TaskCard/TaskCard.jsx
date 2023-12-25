import { memo } from 'react';
import PropTypes from 'prop-types';
import './task-card.css';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';

export const TaskCard = memo((props) => {
    const { task, isLoading, error, renderSubtaskActions, onStatusChange } = props;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="task-card">
            <div className="task-card__header">
                <h2 className="task-card__title">{task.name}</h2>
                <CountdownTimer
                    countdownTime={task.workTime}
                    paused={task.status === 'paused'}
                    onFinish={() => {}}
                />
            </div>
            <ul className="task-card__subtask-list">
                <li>
                    {task.subTasks.map((subTask, index) => (
                        <p key={subTask.id}>
                            {index + 1}. {subTask.description}
                        </p>
                    ))}
                </li>
            </ul>
            {renderSubtaskActions(task.id)}
            <div className="task-card__buttons">
                {task.status === 'paused' || task.status === 'new' ? (
                    <button type="button" onClick={() => onStatusChange(task.id, 'in_work')}>
                        В работу
                    </button>
                ) : (
                    <button type="button" onClick={() => onStatusChange(task.id, 'paused')}>
                        Пауза
                    </button>
                )}
                <button>Завершить</button>
            </div>
        </div>
    );
});

TaskCard.propTypes = {
    task: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    renderSubtaskActions: PropTypes.func,
    onStatusChange: PropTypes.func,
};

TaskCard.displayName = 'TaskCard';
