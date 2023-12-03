package com.planner.plannerapplication.service;

import com.planner.plannerapplication.repository.SubtaskRepo;
import org.springframework.stereotype.Service;

@Service
public class SubtaskService {
    private final SubtaskRepo repo;

    public SubtaskService(SubtaskRepo repo) {
        this.repo = repo;
    }
}
