package com.planner.plannerapplication.repository;

import com.planner.plannerapplication.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Integer> {
    UserEntity findByLoginAndPassword(String login, String password);

    UserEntity findByLogin(String login);
}
