package com.planner.plannerapplication.service;

import com.planner.plannerapplication.entity.SubtaskEntity;
import com.planner.plannerapplication.entity.TaskEntity;
import com.planner.plannerapplication.repository.SubtaskRepo;
import com.planner.plannerapplication.repository.TaskRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class SubtaskService {
    private final SubtaskRepo subtaskRepo;
    private final TaskRepo taskRepo;

    public SubtaskService(SubtaskRepo subtaskRepo, TaskRepo taskRepo) {
        this.subtaskRepo = subtaskRepo;
        this.taskRepo = taskRepo;
    }

    public ArrayList<SubtaskEntity> getSubtasksByTaskId(int id) {
        return subtaskRepo.getAllByTaskId(id);
    }

    public SubtaskEntity createSubtask(int id, SubtaskEntity subtask) {
        TaskEntity task = taskRepo.findById(id).orElse(null);

        if (task == null) {
            return null;
        }
        subtask.setTask(task);

        return subtaskRepo.save(subtask);
    }

    public SubtaskEntity updateSubtask(int id, int subtaskId, SubtaskEntity subtask) {
        TaskEntity task = taskRepo.findById(id).orElse(null);

        if (task == null) {
            return null;
        }
        subtask.setTask(task);
        subtask.setId(subtaskId);

        return subtaskRepo.save(subtask);
    }
}
