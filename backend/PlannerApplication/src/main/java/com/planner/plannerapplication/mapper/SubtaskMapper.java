package com.planner.plannerapplication.mapper;

import com.planner.plannerapplication.dto.SubtaskDto;
import com.planner.plannerapplication.entity.SubtaskEntity;
import org.springframework.stereotype.Component;

@Component
public class SubtaskMapper {
    public static SubtaskDto mapToSubtaskDto(SubtaskEntity subtask) {
        return SubtaskDto.builder()
                .initId(subtask.getId())
                .initName(subtask.getName())
                .initDescription(subtask.getDescription())
                .build();

//        return SubtaskDto.builder()
//                .id(subtask.getId())
//                .name(subtask.getName())
//                .description(subtask.getDescription())
//                .build();
    }

    public static SubtaskEntity mapFromSubtaskDto(SubtaskDto subtask) {
        return SubtaskEntity.builder()
                .id(subtask.getId())
                .name(subtask.getName())
                .description(subtask.getDescription())
                .build();
    }
}
