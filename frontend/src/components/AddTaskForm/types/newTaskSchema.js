import { z } from 'zod';

export const newTaskSchema = z
    .object({
        name: z
            .string({ invalid_type_error: 'Значение должно быть строкой' })
            .min(3, 'Название должно содержать минимум 3 символа')
            .max(30, 'Название не может содержать больше 30 символов'),
        description: z.string({ invalid_type_error: 'Значение должно быть строкой' }).optional(),
        workTime: z
            .number({ invalid_type_error: 'Значение должно быть числом' })
            .positive('Значение должно быть положительным'),
        restTime: z
            .number({ invalid_type_error: 'Значение должно быть числом' })
            .positive('Значение должно быть положительным'),
    })
    .refine((data) => data.restTime < data.workTime, {
        message: 'Время работы должны быть больше времени отдыха',
        path: ['workTime'],
    });
