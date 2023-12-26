package com.planner.plannerapplication.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SubtaskDto {
    private int id;
    private String name;
    private String description;

    public static SubtaskDtoBuilder builder() {
        return new SubtaskDtoBuilder();
    }
}
