package com.app.mingeso.repository;

import com.app.mingeso.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    //agregar metodo de findByEmail
    User findByEmail(String email);
}