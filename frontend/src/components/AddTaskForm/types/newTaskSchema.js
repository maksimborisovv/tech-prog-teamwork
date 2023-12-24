import { z } from 'zod';

export const newTaskSchema = z
    .object({
        name: z
            .string()
            .min(3, 'Название должно содержать минимум 3 символа')
            .max(30, 'Название не может содержать больше 30 символов'),
        description: z.string().optional(),
        workTime: z.number().positive('Значение должно быть положительным'),
        restTime: z.number().positive('Значение должно быть положительным'),
    })
    .refine((data) => data.restTime < data.workTime, {
        message: 'Время работы должны быть больше времени отдыха',
        path: ['workTime'],
    });
