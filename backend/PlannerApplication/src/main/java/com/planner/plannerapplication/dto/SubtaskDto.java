package com.planner.plannerapplication.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SubtaskDto {
    private int id;
    private String name;
    private String description;
}
