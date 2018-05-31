package com.app.mingeso.controller;

import com.app.mingeso.exception.ResourceNotFoundException;
import com.app.mingeso.model.User;
import com.app.mingeso.repository.UserRepository;
import com.fasterxml.jackson.annotation.ObjectIdGenerators.StringIdGenerator;

//import org.springframework.boot.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.userdetails.UserCache;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;



@RestController
@RequestMapping("/User")
public class UserController {

    @Autowired
    UserRepository UserRepository;


    @GetMapping("/all")
    public List<User> getAllUsers() {
        return UserRepository.findAll();
    }

    @PostMapping("/all")
    public User createUser(@Valid @RequestBody User User) {
        return UserRepository.save(User);
    }



    /*
    @PostMapping("/login")
    public User matchUser(@Valid @RequestBody User UserDetails) {

        try{

        }
        if (UserDetails.getEmail()==UserRepository.findByEmail(email) && UserDetails.getPassword()==){

        }
        return UserRepository.save(User);
    }
    */

    /*
    @GetMapping("/")
    public User getUserByEmail(@PathVariable(value = "email") String userEmail) {
        return UserRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));
    }*/

    
    @PutMapping("/login")
    //@ResponseBody
    public User loginUser(@Valid @RequestBody User UserDetails) {
        
        
        User user = UserRepository.findByEmail(UserDetails.getEmail());

        String passIngresada= UserDetails.getPassword();
    
        if (user==null) {
            //return "user not found";
            return null;
        }
        if (user.getPassword().equals(passIngresada)){
            //return "Ingresado" + passIngresada + user.getPassword();
            return user;
        }else{
            //return "FAIL" + passIngresada + user.getPassword();
            return null;
        }
        
    }

    /*
    @PutMapping("/login")
    public User loginUser(@Valid @RequestBody User UserDetails) {

    	User user = userRepository.findByEmail(UserDetails.getEmail()
                .orElseThrow(() -> new ResourceNotFoundException("email","null",UserDetails.getEmail()));
        return user;
    }
    */





    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value = "id") Integer UserId) {
        return UserRepository.findById(UserId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", UserId));
    }


    
    

    @PutMapping("/{id}")
    public User updateUser(@PathVariable(value = "id") Integer UserId,
                                            @Valid @RequestBody User UserDetails) {

    	User User = UserRepository.findById(UserId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", UserId));

        User.setId(UserDetails.getId());
        User.setEmail(UserDetails.getEmail());
        User.setName(UserDetails.getName());

        User updatedUser = UserRepository.save(User);
        return updatedUser;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Integer UserId) {
    	User note = UserRepository.findById(UserId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", UserId));

    	UserRepository.delete(note);

        return ResponseEntity.ok().build();
    }

}