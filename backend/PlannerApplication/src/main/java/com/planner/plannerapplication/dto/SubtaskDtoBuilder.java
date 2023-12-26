package com.planner.plannerapplication.dto;

public class SubtaskDtoBuilder {
    private int id;
    private String name;
    private String description;

    public SubtaskDtoBuilder initId(int id) {
        this.id = id;
        return this;
    }

    public SubtaskDtoBuilder initName(String name) {
        this.name = name;
        return this;
    }

    public SubtaskDtoBuilder initDescription(String description) {
        this.description = description;
        return this;
    }

    public SubtaskDto build() {
        SubtaskDto subtaskDto = new SubtaskDto();
        subtaskDto.setId(id);
        subtaskDto.setName(name);
        subtaskDto.setDescription(description);

        return subtaskDto;
    }
}
