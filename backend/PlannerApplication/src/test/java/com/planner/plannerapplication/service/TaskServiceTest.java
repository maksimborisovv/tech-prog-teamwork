package com.planner.plannerapplication.service;

import com.planner.plannerapplication.entity.TaskEntity;
import com.planner.plannerapplication.entity.UserEntity;
import com.planner.plannerapplication.repository.TaskRepo;
import com.planner.plannerapplication.repository.UserRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.sql.Date;
import java.util.Optional;

class TaskServiceTest {

    @Test
    void createTaskNull() {
        UserRepo userRepo = Mockito.mock(UserRepo.class);
        TaskService taskService = Mockito.mock(TaskService.class);

        Mockito.when(userRepo.findById(1)).thenReturn(null);

        TaskEntity res = taskService.createTask(1, new TaskEntity());

        Assertions.assertNull(res);
    }

    @Test
    void createTaskSuccess() {
        UserRepo userRepo = Mockito.mock(UserRepo.class);
        TaskRepo taskRepo = Mockito.mock(TaskRepo.class);
        TaskService taskService = new TaskService(taskRepo, userRepo);

        TaskEntity expRes = TaskEntity.builder()
                .name("Test")
                .description("desc")
                .date(new Date(0))
                .status("NEW")
                .workTime(0)
                .freeTime(0)
                .pomodoro(0)
                .build();
        Optional<UserEntity> optionalUserEntity = Optional.of(new UserEntity());

        Mockito.when(userRepo.findById(1)).thenReturn(optionalUserEntity);
        Mockito.when(taskRepo.save(expRes)).thenReturn(expRes);

        TaskEntity res = taskService.createTask(1, expRes);

        Assertions.assertEquals(expRes, res);
    }
}