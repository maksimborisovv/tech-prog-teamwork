package com.planner.plannerapplication.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateUserDto {
    private String login;
    private String password;
    private String name;
}
