package com.app.mingeso.controller;

import com.app.mingeso.exception.ResourceNotFoundException;
import com.app.mingeso.model.Problem;
import com.app.mingeso.repository.ProblemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/problem")
public class ProblemController {

    @Autowired
    ProblemRepository problemRepository;


    @GetMapping("/all")
    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    @PostMapping("/all")
    public Problem createProblem(@Valid @RequestBody Problem Problem) {
        return problemRepository.save(Problem);
    }
    
    @GetMapping("/{id}")
    public Problem getProblemById(@PathVariable(value = "id") Integer ProblemId) {
        return problemRepository.findById(ProblemId)
                .orElseThrow(() -> new ResourceNotFoundException("Problem", "id", ProblemId));
    }

    @GetMapping("/FromUser/{id}")
    public List<Problem> getProblemByUserId(@PathVariable(value = "id") Integer userID) {
        List<Problem>  lista=problemRepository.findAll();
        List<Problem>  listaNueva = new ArrayList<Problem>();
        //Filtrar
        int i=0;
        while (i<lista.size()) {
            if (lista.get(i).getId_user()==userID){
                listaNueva.add(lista.get(i));
            }
            i=i+1;
        }
        return listaNueva;
    }

    @PutMapping("/{id}")
    public Problem updateProblem(@PathVariable(value = "id") Integer ProblemId,
                                            @Valid @RequestBody Problem ProblemDetails) {

    	Problem Problem = problemRepository.findById(ProblemId)
                .orElseThrow(() -> new ResourceNotFoundException("Problem", "id", ProblemId));

        Problem.setId(ProblemDetails.getId());
        Problem.setId_user(ProblemDetails.getId_user());
        Problem.setDescription(ProblemDetails.getDescription());
        Problem.setTitle(ProblemDetails.getTitle());

        Problem updatedProblem = problemRepository.save(Problem);
        return updatedProblem;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProblem(@PathVariable(value = "id") Integer ProblemId) {
    	Problem note = problemRepository.findById(ProblemId)
                .orElseThrow(() -> new ResourceNotFoundException("Problem", "id", ProblemId));

    	problemRepository.delete(note);

        return ResponseEntity.ok().build();
    }








    

}