import { AddTaskButton } from '../AddTaskButton/AddTaskButton';
import { Link, useNavigate } from 'react-router-dom';
import './TopBar.css';
import { useCallback } from 'react';

const TopBar = () => {
    const navigate = useNavigate();

    const onTaskAddHandle = useCallback(() => {
        navigate('/task/new');
    }, [navigate]);

    return (
        <nav className="topbar__nav">
            <ul className="topbar__ul">
                <li className="topbar__li">
                    <Link to={'/'}>Задачи</Link>
                </li>
                <li className="topbar__li">Статистика</li>
            </ul>
            <AddTaskButton onTaskAdd={onTaskAddHandle} />
        </nav>
    );
};

export default TopBar;
