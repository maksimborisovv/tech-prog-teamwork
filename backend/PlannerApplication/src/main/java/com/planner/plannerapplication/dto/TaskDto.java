package com.planner.plannerapplication.dto;

import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Data
@Builder
public class TaskDto {
    private int id;
    private String name;
    private String description;
    private Date date;
    private String status;
    private int workTime;
    private int freeTime;
    private int pomodoro;
}
