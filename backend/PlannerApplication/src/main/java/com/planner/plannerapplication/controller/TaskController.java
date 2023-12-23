package com.planner.plannerapplication.controller;

import com.planner.plannerapplication.dto.TaskDto;
import com.planner.plannerapplication.entity.TaskEntity;
import com.planner.plannerapplication.mapper.TaskMapper;
import com.planner.plannerapplication.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping("/users/{id}/tasks")
    public ResponseEntity<ArrayList<TaskDto>> getTasksByUserId(@PathVariable int id) {
        ArrayList<TaskEntity> taskEntities = service.getTasksByUserId(id);
        ArrayList<TaskDto> taskDtos = new ArrayList<>();

        for (TaskEntity taskEntity : taskEntities) {
            taskDtos.add(TaskMapper.mapToTaskDto(taskEntity));
        }

        if (taskEntities.isEmpty()) {
            return new ResponseEntity<>(taskDtos, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(taskDtos, HttpStatus.OK);
    }

    @PostMapping("/users/{id}/tasks")
    public ResponseEntity<Integer> createTask(@PathVariable int id, @RequestBody TaskDto taskDto) {
        TaskEntity taskEntity = service.createTask(id, TaskMapper.mapFromTaskDto(taskDto));

        if (taskEntity == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(taskEntity.getId(), HttpStatus.CREATED);
    }

    @PutMapping("/users/{id}/tasks/{taskId}")
    public ResponseEntity<Integer> updateTask(@PathVariable int id, @PathVariable int taskId, @RequestBody TaskDto taskDto) {
        TaskEntity taskEntity = service.updateTask(id, taskId, TaskMapper.mapFromTaskDto(taskDto));

        if (taskEntity == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(taskEntity.getId(), HttpStatus.OK);
    }
}
