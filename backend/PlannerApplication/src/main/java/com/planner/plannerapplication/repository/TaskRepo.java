package com.planner.plannerapplication.repository;

import com.planner.plannerapplication.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TaskRepo extends JpaRepository<TaskEntity, Integer> {
    ArrayList<TaskEntity> getAllByUserId(int userId);
}
