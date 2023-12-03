package com.planner.plannerapplication.controller;

import com.planner.plannerapplication.service.SubtaskService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SubtaskController {
    private final SubtaskService service;

    public SubtaskController(SubtaskService service) {
        this.service = service;
    }
}
