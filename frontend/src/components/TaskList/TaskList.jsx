import { memo } from 'react';
import PropTypes from 'prop-types';
import './task-list.css';

export const TaskList = memo((props) => {
    const { tasks, isLoading, renderTask } = props;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="task-list">
            <div className="task-list__header">
                <p>Название задачи</p>
                <p>Дата создания</p>
                <p>Текущий статус</p>
                <p>Действия</p>
            </div>
            <div className="task-list__divider" />
            {tasks
                .sort(
                    (prev, next) =>
                        new Date(next.created_At).getTime() - new Date(prev.created_At).getTime()
                )
                .map((task) => (
                    <div key={task.id}>{renderTask(task)}</div>
                ))}
        </div>
    );
});

TaskList.propTypes = {
    tasks: PropTypes.array,
    isLoading: PropTypes.bool,
    actions: PropTypes.element,
    renderTask: PropTypes.func,
};

TaskList.displayName = 'TaskList';
