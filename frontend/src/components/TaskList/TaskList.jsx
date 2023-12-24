import { memo } from 'react';
import PropTypes from 'prop-types';
import './task-list.css';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList = memo((props) => {
    const { tasks, isLoading } = props;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="task-list">
            <div className="task-list__header">
                <p>Название задачи</p>
                <p>Дата создания</p>
                <p>Текущий статус</p>
            </div>
            <div className="task-list__divider" />
            {tasks
                .sort(
                    (prev, next) =>
                        new Date(next.created_At).getTime() - new Date(prev.created_At).getTime()
                )
                .map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
        </div>
    );
});

TaskList.propTypes = {
    tasks: PropTypes.array,
    isLoading: PropTypes.bool,
};

TaskList.displayName = 'TaskList';
