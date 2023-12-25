import { memo } from 'react';
import PropTypes from 'prop-types';
import './task-item.css';
import { useNavigate } from 'react-router-dom';

import { formatISODate } from '../../lib/helpers/formatISODate';

export const TaskItem = memo((props) => {
    const { task, actions } = props;
    const navigate = useNavigate();

    return (
        <div className="task-item" onClick={() => navigate(`task/${task.id}`)}>
            <p>{task.name}</p>
            <p>{formatISODate(task.created_At)}</p>
            <p>{task.status}</p>
            {actions}
        </div>
    );
});

TaskItem.propTypes = {
    task: PropTypes.object,
    actions: PropTypes.element,
};

TaskItem.displayName = 'TaskItem';
