package com.app.mingeso.controller;

import com.app.mingeso.exception.ResourceNotFoundException;
import com.app.mingeso.model.TestCases;
import com.app.mingeso.repository.TestCasesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/TestCases")
public class TestCasesController {

    @Autowired
    TestCasesRepository TestCasesRepository;


    @GetMapping("/all")
    public List<TestCases> getAllTestCasess() {
        return TestCasesRepository.findAll();
    }

    @PostMapping("/all")
    public TestCases createTestCases(@Valid @RequestBody TestCases TestCases) {
        return TestCasesRepository.save(TestCases);
    }
    
    @GetMapping("/{id}")
    public TestCases getTestCasesById(@PathVariable(value = "id") Integer TestCasesId) {
        return TestCasesRepository.findById(TestCasesId)
                .orElseThrow(() -> new ResourceNotFoundException("TestCases", "id", TestCasesId));
    }

    @PutMapping("/{id}")
    public TestCases updateTestCases(@PathVariable(value = "id") Integer TestCasesId,
                                            @Valid @RequestBody TestCases TestCasesDetails) {

    	TestCases TestCases = TestCasesRepository.findById(TestCasesId)
                .orElseThrow(() -> new ResourceNotFoundException("TestCases", "id", TestCasesId));

        TestCases.setId(TestCasesDetails.getId());
        TestCases.setId_problem(TestCasesDetails.getId_problem());
        TestCases.setInput(TestCasesDetails.getInput());
        TestCases.setOutput(TestCasesDetails.getOutput());

        TestCases updatedTestCases = TestCasesRepository.save(TestCases);
        return updatedTestCases;
    }

    @DeleteMapping("/TestCasess/{id}")
    public ResponseEntity<?> deleteTestCases(@PathVariable(value = "id") Integer TestCasesId) {
    	TestCases note = TestCasesRepository.findById(TestCasesId)
                .orElseThrow(() -> new ResourceNotFoundException("TestCases", "id", TestCasesId));

    	TestCasesRepository.delete(note);

        return ResponseEntity.ok().build();
    }

}