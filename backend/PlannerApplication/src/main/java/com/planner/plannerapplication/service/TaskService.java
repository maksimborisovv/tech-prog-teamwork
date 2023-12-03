package com.planner.plannerapplication.service;

import com.planner.plannerapplication.repository.TaskRepo;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private final TaskRepo repo;

    public TaskService(TaskRepo repo) {
        this.repo = repo;
    }
}
