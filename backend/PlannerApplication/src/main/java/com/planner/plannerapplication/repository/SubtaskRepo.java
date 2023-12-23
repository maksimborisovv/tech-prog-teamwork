package com.planner.plannerapplication.repository;

import com.planner.plannerapplication.entity.SubtaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface SubtaskRepo extends JpaRepository<SubtaskEntity, Integer> {
    ArrayList<SubtaskEntity> getAllByTaskId(int id);
}
