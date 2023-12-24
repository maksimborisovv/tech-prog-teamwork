import { memo } from 'react';
import './task-form.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { newTaskSchema } from './types/newTaskSchema';

export const AddTaskForm = memo(() => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(newTaskSchema),
    });

    const handleFormSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <h1>Форма создания задачи</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="task-form">
                <input
                    {...register('name')}
                    placeholder="Название задачи"
                    className="task-form__input"
                />
                {errors.name && <p className="task-form__error">{`${errors.name.message}`}</p>}
                <input
                    {...register('description')}
                    placeholder="Описание задачи"
                    className="task-form__input"
                />
                {errors.description && (
                    <p className="task-form__error">{`${errors.description.message}`}</p>
                )}
                <input
                    {...register('workTime', { valueAsNumber: true })}
                    placeholder="Интервал работы (в секундах)"
                    className="task-form__input"
                    type="number"
                />
                {errors.workTime && (
                    <p className="task-form__error">{`${errors.workTime.message}`}</p>
                )}
                <input
                    {...register('restTime', { valueAsNumber: true })}
                    placeholder="Интервал отдыха (в секундах)"
                    className="task-form__input"
                    type="number"
                />
                {errors.restTime && (
                    <p className="task-form__error">{`${errors.restTime.message}`}</p>
                )}
                <button disabled={isSubmitting} type="submit" className="task-form__submit-button">
                    Создать задачу
                </button>
            </form>
        </>
    );
});

AddTaskForm.displayName = 'AddTaskForm';
