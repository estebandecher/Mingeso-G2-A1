package com.app.mingeso.controller;

import com.app.mingeso.exception.ResourceNotFoundException;
import com.app.mingeso.model.Solution;
import com.app.mingeso.repository.SolutionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/Solution")
public class SolutionController {

    @Autowired
    SolutionRepository SolutionRepository;


    @GetMapping("/all")
    public List<Solution> getAllSolutions() {
        return SolutionRepository.findAll();
    }

    @PostMapping("/all")
    public Solution createSolution(@Valid @RequestBody Solution Solution) {
        return SolutionRepository.save(Solution);
    }
    
    @GetMapping("/{id}")
    public Solution getSolutionById(@PathVariable(value = "id") Integer SolutionId) {
        return SolutionRepository.findById(SolutionId)
                .orElseThrow(() -> new ResourceNotFoundException("Solution", "id", SolutionId));
    }

    @PutMapping("/{id}")
    public Solution updateSolution(@PathVariable(value = "id") Integer SolutionId,
                                            @Valid @RequestBody Solution SolutionDetails) {

    	Solution Solution = SolutionRepository.findById(SolutionId)
                .orElseThrow(() -> new ResourceNotFoundException("Solution", "id", SolutionId));

        Solution.setId(SolutionDetails.getId());
        Solution.setId_user(SolutionDetails.getId_user());
        Solution.setId_problem(SolutionDetails.getId_problem());
        Solution.setDescription(SolutionDetails.getDescription());

        Solution updatedSolution = SolutionRepository.save(Solution);
        return updatedSolution;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSolution(@PathVariable(value = "id") Integer SolutionId) {
    	Solution note = SolutionRepository.findById(SolutionId)
                .orElseThrow(() -> new ResourceNotFoundException("Solution", "id", SolutionId));

    	SolutionRepository.delete(note);

        return ResponseEntity.ok().build();
    }

}