package com.planner.plannerapplication.mapper;

import com.planner.plannerapplication.dto.TaskDto;
import com.planner.plannerapplication.entity.TaskEntity;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {
    public static TaskDto mapToTaskDto(TaskEntity task) {
        return TaskDto.builder()
                .id(task.getId())
                .name(task.getName())
                .description(task.getDescription())
                .date(task.getDate())
                .status(task.getStatus())
                .workTime(task.getWorkTime())
                .freeTime(task.getFreeTime())
                .pomodoro(task.getPomodoro())
                .build();
    }

    public static TaskEntity mapFromTaskDto(TaskDto task) {
        return TaskEntity.builder()
                .id(task.getId())
                .name(task.getName())
                .description(task.getDescription())
                .date(task.getDate())
                .status(task.getStatus())
                .workTime(task.getWorkTime())
                .freeTime(task.getFreeTime())
                .pomodoro(task.getPomodoro())
                .build();
    }
}
