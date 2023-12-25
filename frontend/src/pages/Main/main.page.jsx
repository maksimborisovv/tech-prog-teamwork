import './main.css';
import TopBar from '../../components/TopBar';
import { TaskList } from '../../components/TaskList/TaskList';
import { mockTasks } from '../../lib/mock/mockTasks';
import { DeleteTaskButton } from '../../components/DeleteTaskButton/AddTaskButton';
import { useDeleteTask } from '../../api/tasksApi';
import { useCallback } from 'react';
import { TaskItem } from '../../components/TaskItem/TaskItem';

const MainPage = () => {
    // const { data: tasks, isLoading } = useTasks();

    const [deleteTaskQuery] = useDeleteTask();

    const onDeleteHandle = useCallback(
        (taskId) => {
            deleteTaskQuery(taskId);
        },
        [deleteTaskQuery]
    );

    return (
        <main className="main">
            <TaskList
                tasks={mockTasks}
                isLoading={false}
                renderTask={(task) => (
                    <TaskItem
                        task={task}
                        actions={<DeleteTaskButton onTaskDelete={() => onDeleteHandle(task.id)} />}
                    />
                )}
            />
        </main>
    );
};

export default MainPage;
