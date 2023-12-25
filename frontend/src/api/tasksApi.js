import {
    CREATE_SUBTASK,
    CREATE_TASK,
    DELETE_TASKS,
    FETCH_TASK,
    FETCH_TASKS,
    PATCH_TASK_STATUS,
} from './endpoints';
import { rtkApi } from './rtkApi';

const tasksApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getTasksList: build.query({
            query: () => ({
                url: FETCH_TASKS,
            }),
        }),
        getTask: build.query({
            query: (taskId) => ({
                url: FETCH_TASK,
                params: {
                    taskId,
                },
            }),
        }),
        createTask: build.mutation({
            query: (newTask) => ({
                url: CREATE_TASK,
                method: 'POST',
                body: newTask,
            }),
        }),
        createSubTask: build.mutation({
            query: (taskId, newSubTask) => ({
                url: CREATE_SUBTASK,
                method: 'POST',
                body: {
                    taskId,
                    newSubTask,
                },
            }),
        }),
        changeTaskStatus: build.mutation({
            query: ({ taskId, newStatus }) => {
                console.log(newStatus);
                return {
                    url: PATCH_TASK_STATUS,
                    method: 'PATCH',
                    params: {
                        taskId,
                    },
                    body: {
                        newStatus,
                    },
                };
            },
        }),
        deleteTask: build.mutation({
            query: (taskId) => ({
                url: DELETE_TASKS,
                method: 'DELETE',
                params: {
                    taskId,
                },
            }),
        }),
    }),
});

export const useTasks = tasksApi.useGetTasksListQuery;
export const useTask = tasksApi.useGetTaskQuery;
export const useCreateTask = tasksApi.useCreateTaskMutation;
export const usePatchStatus = tasksApi.useChangeTaskStatusMutation;
export const useCreateSubTask = tasksApi.useCreateSubTaskMutation;
export const useDeleteTask = tasksApi.useDeleteTaskMutation;
