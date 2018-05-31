package com.app.mingeso.controller;

import com.app.mingeso.exception.ResourceNotFoundException;
import com.app.mingeso.model.TestCases;
import com.app.mingeso.repository.TestCasesRepository;

import com.app.mingeso.model.Problem;
import com.app.mingeso.repository.ProblemRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import javax.validation.Valid;

import java.util.ArrayList;
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

    
    @PutMapping("/Create/{id}")
    public TestCases createTestCases2(@PathVariable(value = "id") Integer ProblemId, @Valid @RequestBody TestCases TestCasesDetails){
        
        //Se crea
        TestCasesRepository.save(TestCasesDetails);

        //Se busca el test case recien creado
        List<TestCases> lista=TestCasesRepository.findAll();
        //se saca el ultimo
        Integer lastIndex=lista.size()-1;
        TestCases testCase=lista.get(lastIndex);

        //Se debe setear los mismos datos 
        //testCase.setId(TestCasesDetails.getId());
        testCase.setId_problem(ProblemId);
        //testCase.setInput(TestCasesDetails.getInput());
        //testCase.setOutput(TestCasesDetails.getOutput());

        TestCases updatedTestCases = TestCasesRepository.save(testCase);
        return updatedTestCases;
    }
    
    
    @GetMapping("/{id}")
    public TestCases getTestCasesById(@PathVariable(value = "id") Integer TestCasesId) {
        return TestCasesRepository.findById(TestCasesId)
                .orElseThrow(() -> new ResourceNotFoundException("TestCases", "id", TestCasesId));
    }
    
    //Se obtienen los testCase de un problema
    @GetMapping("/FromProblem/{id}")
    public List<TestCases> getTestCasesByUserId(@PathVariable(value = "id") Integer problemID) {
        List<TestCases>  listaOriginal=TestCasesRepository.findAll();
        List<TestCases>  listaNueva=new  ArrayList<TestCases>();
        //Filtrar
        int i=0;
        while (i<listaOriginal.size()) {
            if (listaOriginal.get(i).getId_problem()==problemID){
                listaNueva.add(listaOriginal.get(i));
            }
            i=i+1;
        }
        return listaNueva;
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

    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTestCases(@PathVariable(value = "id") Integer TestCasesId) {
    	TestCases note = TestCasesRepository.findById(TestCasesId)
                .orElseThrow(() -> new ResourceNotFoundException("TestCases", "id", TestCasesId));

    	TestCasesRepository.delete(note);

        return ResponseEntity.ok().build();
    }

}