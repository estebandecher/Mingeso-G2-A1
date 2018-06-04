package com.app.mingeso.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
// import javax.validation.constraints.NotBlank;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;


//@Data-lombok
@Entity
@Table(name = "test_cases")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class TestCases implements Serializable {
    private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="id_problem")
	public Integer id_problem;
	@Column(name="input")
    public String input;
    @Column(name="output")
	public String output;
    

    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }



    public Integer getId_problem(){
        return id_problem;
    }
    public void setId_problem(Integer id_problem){
        this.id_problem=id_problem;
    }


    public String getInput(){
        return input;
    }
    public void setInput(String input){
        this.input=input;
    }

    public String getOutput(){
        return output;
    }
    public void setOutput(String output){
        this.output=output;
    }


	
}