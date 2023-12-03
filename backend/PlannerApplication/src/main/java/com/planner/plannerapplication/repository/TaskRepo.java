package com.planner.plannerapplication.repository;

import com.planner.plannerapplication.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepo extends JpaRepository<TaskEntity, Integer> {
}
