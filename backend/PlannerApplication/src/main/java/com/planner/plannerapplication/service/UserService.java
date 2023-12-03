package com.planner.plannerapplication.service;

import com.planner.plannerapplication.entity.UserEntity;
import com.planner.plannerapplication.repository.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public UserEntity getUserById(int id) {
        return userRepo.findById(id)
                .orElseThrow(RuntimeException::new);
    }

    public UserEntity getUserByLoginPassword(String login, String password) {
        return userRepo.findByLoginAndPassword(login, password);
    }

    public UserEntity createUser(UserEntity user) {
        UserEntity existsUser = userRepo.findByLogin(user.getLogin());

        if (existsUser == null) {
            return userRepo.save(user);
        } else {
            return null;
        }
    }
}
