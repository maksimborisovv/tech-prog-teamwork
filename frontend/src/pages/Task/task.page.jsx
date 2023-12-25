import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AddTaskForm } from '../../components/AddTaskForm/AddTaskForm';
import { useCreateSubTask, usePatchStatus, useTask } from '../../api/tasksApi';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { mockTasks } from '../../lib/mock/mockTasks';
import { AddSubTaskForm } from '../../components/AddSubTaskForm/AddSubTaskForm';

export const TaskPage = memo(() => {
    const { id } = useParams();

    // const { data: task, isLoading, error } = useTask(id);
    const [createSubTaskQuery] = useCreateSubTask();
    const [patchTaskStatusQuery] = usePatchStatus();

    const onAddSubTaskHandle = useCallback(
        (newSubTask) => {
            createSubTaskQuery(newSubTask);
        },
        [createSubTaskQuery]
    );

    const onTaskStatusChangeHandle = useCallback(
        (taskId, newStatus) => {
            patchTaskStatusQuery({ taskId, newStatus });
        },
        [patchTaskStatusQuery]
    );

    if (id === 'new') {
        return <AddTaskForm />;
    }

    return (
        <div>
            <h1>Страница задачи {id}</h1>
            <TaskCard
                task={mockTasks[0]}
                isLoading={false}
                error={undefined}
                renderSubtaskActions={(task) => (
                    <AddSubTaskForm
                        onTaskAdd={(subTaskDescription) =>
                            onAddSubTaskHandle(task, subTaskDescription)
                        }
                    />
                )}
                onStatusChange={onTaskStatusChangeHandle}
            />
        </div>
    );
});

TaskPage.displayName = 'Taskpage';
