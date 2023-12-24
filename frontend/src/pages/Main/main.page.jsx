import './main.css';
import TopBar from '../../components/TopBar';
import { TaskList } from '../../components/TaskList/TaskList';
import { mockTasks } from '../../lib/mock/mockTasks';

const MainPage = () => {
    // const { data: tasks, isLoading } = useTasks();

    return (
        <>
            <TopBar />
            <main className="main">
                <TaskList tasks={mockTasks} isLoading={false} />
            </main>
        </>
    );
};

export default MainPage;
