package com.app.mingeso.repository;

import com.app.mingeso.model.TestCases;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestCasesRepository extends JpaRepository<TestCases,Integer> {

}