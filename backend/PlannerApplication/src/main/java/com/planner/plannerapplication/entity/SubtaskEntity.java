package com.planner.plannerapplication.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "subtasks")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Data
public class SubtaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private TaskEntity task;

    private String name;
    private String description;
}
