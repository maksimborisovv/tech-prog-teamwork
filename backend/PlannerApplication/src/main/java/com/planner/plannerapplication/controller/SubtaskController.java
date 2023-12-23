package com.planner.plannerapplication.controller;

import com.planner.plannerapplication.dto.SubtaskDto;
import com.planner.plannerapplication.entity.SubtaskEntity;
import com.planner.plannerapplication.mapper.SubtaskMapper;
import com.planner.plannerapplication.service.SubtaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class SubtaskController {
    private final SubtaskService service;

    public SubtaskController(SubtaskService service) {
        this.service = service;
    }

    @GetMapping("/tasks/{id}/subtasks")
    public ResponseEntity<ArrayList<SubtaskDto>> getSubtasksByTaskId(@PathVariable int id) {
        ArrayList<SubtaskEntity> subtaskEntities = service.getSubtasksByTaskId(id);
        ArrayList<SubtaskDto> subtaskDtos = new ArrayList<>();

        for (SubtaskEntity subtaskEntity : subtaskEntities) {
            subtaskDtos.add(SubtaskMapper.mapToSubtaskDto(subtaskEntity));
        }

        if (subtaskEntities.isEmpty()) {
            return new ResponseEntity<>(subtaskDtos, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(subtaskDtos, HttpStatus.OK);
    }

    @PostMapping("/tasks/{id}/subtasks")
    public ResponseEntity<Integer> createSubtask(@PathVariable int id, @RequestBody SubtaskDto subtaskDto) {
        SubtaskEntity subtaskEntity = service.createSubtask(id, SubtaskMapper.mapFromSubtaskDto(subtaskDto));

        if (subtaskEntity == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(subtaskEntity.getId(), HttpStatus.OK);
    }

    @PutMapping("/tasks/{id}/subtasks/{subtaskId}")
    public ResponseEntity<Integer> updateSubtask(@PathVariable int id, @PathVariable int subtaskId, @RequestBody SubtaskDto subtaskDto) {
        SubtaskEntity subtaskEntity = service.updateSubtask(id, subtaskId, SubtaskMapper.mapFromSubtaskDto(subtaskDto));

        if (subtaskEntity == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(subtaskEntity.getId(), HttpStatus.OK);
    }
}
