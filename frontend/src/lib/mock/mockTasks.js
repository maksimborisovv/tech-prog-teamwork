import { mockSubTasks } from './mockSubTasks';

export const mockTasks = [
    {
        id: '1',
        userId: '1',
        name: 'Task 1',
        status: 'new',
        description: 'Cool task 1',
        created_At: '2023-12-25T13:29:35+0000',
        workTime: '1200000', //20 минут, 20 * 60000
        restTime: '300 000', //5 минут, 5 * 60000
        subTasks: mockSubTasks.slice(0, 3),
        pomodoro: 0,
    },

    {
        id: '2',
        userId: '1',
        name: 'Task 2',
        status: 'paused',
        description: 'Cool task 2',
        created_At: '2023-12-24T13:29:35+0000',
        workTime: '1200000', //20 минут, 20 * 60000
        restTime: '300 000', //5 минут, 5 * 60000
        subTasks: mockSubTasks[4],
        pomodoro: 1,
    },

    {
        id: '3',
        userId: '1',
        name: 'Task 3',
        status: 'completed',
        description: 'Cool task 3',
        created_At: '2023-11-24T13:29:35+0000',
        workTime: '1200000', //20 минут, 20 * 60000
        restTime: '300 000', //5 минут, 5 * 60000
        subTasks: [mockSubTasks[3], mockSubTasks[5]],
        pomodoro: 5,
    },
];
