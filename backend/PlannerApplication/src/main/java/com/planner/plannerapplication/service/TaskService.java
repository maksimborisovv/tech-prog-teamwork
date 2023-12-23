package com.planner.plannerapplication.service;

import com.planner.plannerapplication.entity.TaskEntity;
import com.planner.plannerapplication.entity.UserEntity;
import com.planner.plannerapplication.repository.TaskRepo;
import com.planner.plannerapplication.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TaskService {
    private final TaskRepo taskRepo;
    private final UserRepo userRepo;

    public TaskService(TaskRepo taskRepo, UserRepo userRepo) {
        this.taskRepo = taskRepo;
        this.userRepo = userRepo;
    }

    public ArrayList<TaskEntity> getTasksByUserId(int userId) {
        return taskRepo.getAllByUserId(userId);
    }

    public TaskEntity createTask(int id, TaskEntity task) {
        UserEntity user = userRepo.findById(id).orElse(null);

        if (user == null) {
            return null;
        }
        task.setUser(user);

        return taskRepo.save(task);
    }

    public TaskEntity updateTask(int id, int taskId, TaskEntity task) {
        UserEntity user = userRepo.findById(id).orElse(null);

        if (user == null) {
            return null;
        }
        task.setUser(user);
        task.setId(taskId);

        return taskRepo.save(task);
    }
}
