package com.planner.plannerapplication.controller;

import com.planner.plannerapplication.dto.CreateUserDto;
import com.planner.plannerapplication.dto.LoginPasswordDto;
import com.planner.plannerapplication.dto.UserInfoDto;
import com.planner.plannerapplication.entity.UserEntity;
import com.planner.plannerapplication.mapper.UserMapper;
import com.planner.plannerapplication.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/users/{id}")
    public UserInfoDto getUser(@PathVariable int id) {
        return UserMapper.mapToUserInfoDto(service.getUserById(id));
    }

    @GetMapping("/users/auth")
    public ResponseEntity<UserInfoDto> auth(@RequestBody LoginPasswordDto loginPasswordDto) {
        UserEntity userEntity = service.getUserByLoginPassword(
                loginPasswordDto.getLogin(),
                loginPasswordDto.getPassword()
        );

        if (userEntity == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(UserMapper.mapToUserInfoDto(userEntity), HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<UserInfoDto> createUser(@RequestBody CreateUserDto createUserDto) {
        UserEntity userEntity = service.createUser(UserMapper.mapFromCreateUserDto(createUserDto));

        if (userEntity == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(UserMapper.mapToUserInfoDto(userEntity), HttpStatus.CREATED);
    }
}
