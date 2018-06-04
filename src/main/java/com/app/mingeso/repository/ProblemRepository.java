package com.app.mingeso.repository;

import com.app.mingeso.model.Problem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem,Integer> {

}