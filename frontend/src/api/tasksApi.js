import { FETCH_TASKS } from './endpoints';
import { rtkApi } from './rtkApi';

const tasksApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getTasksList: build.query({
            query: () => ({
                url: FETCH_TASKS,
            }),
        }),
    }),
});

export const useTasks = tasksApi.useGetTasksListQuery;
