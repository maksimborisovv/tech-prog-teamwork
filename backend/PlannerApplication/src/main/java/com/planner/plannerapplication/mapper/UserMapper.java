package com.planner.plannerapplication.mapper;

import com.planner.plannerapplication.dto.CreateUserDto;
import com.planner.plannerapplication.dto.UserInfoDto;
import com.planner.plannerapplication.entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public static UserInfoDto mapToUserInfoDto(UserEntity user) {
        return UserInfoDto.builder()
                .id(user.getId())
                .name(user.getName())
                .build();
    }

    public static UserEntity mapFromCreateUserDto(CreateUserDto userDto) {
        return UserEntity.builder()
                .login(userDto.getLogin())
                .password(userDto.getPassword())
                .name(userDto.getName())
                .build();
    }
}
