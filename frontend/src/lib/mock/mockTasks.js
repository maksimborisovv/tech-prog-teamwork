export const mockTasks = [
    {
        id: '1',
        userId: '1',
        name: 'Task 1',
        status: 'new',
        description: 'Cool task 1',
        created_At: '2023-12-25T13:29:35+0000',
        workTime: '1200',
        restTime: '300',
        subTasksIds: [1, 2, 3],
        pomodoro: 0,
    },

    {
        id: '2',
        userId: '1',
        name: 'Task 2',
        status: 'paused',
        description: 'Cool task 2',
        created_At: '2023-12-24T13:29:35+0000',
        workTime: '1200',
        restTime: '500',
        subTasksIds: [5],
        pomodoro: 1,
    },

    {
        id: '3',
        userId: '1',
        name: 'Task 3',
        status: 'completed',
        description: 'Cool task 3',
        created_At: '2023-11-24T13:29:35+0000',
        workTime: '2000',
        restTime: '300',
        subTasksIds: [4, 7],
        pomodoro: 5,
    },
];
