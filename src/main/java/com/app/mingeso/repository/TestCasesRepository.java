package com.app.mingeso.repository;

import java.util.List;

import com.app.mingeso.model.TestCases;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.*;

@Repository
public interface TestCasesRepository extends JpaRepository<TestCases,Integer> {

        //@Query("select u from User u where u.emailAddress = ?1")
        //public List<TestCases> findById_problem(Integer id_problem);
}