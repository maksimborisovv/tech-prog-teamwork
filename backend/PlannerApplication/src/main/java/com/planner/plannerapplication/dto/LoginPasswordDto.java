package com.planner.plannerapplication.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginPasswordDto {
    private String login;
    private String password;
}
