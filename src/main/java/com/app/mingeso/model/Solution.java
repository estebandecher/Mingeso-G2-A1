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
@Table(name = "solution")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Solution implements Serializable {
    private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="id_user")
    public Integer id_user;
    @Column(name="id_problem")
	public Integer id_problem;
	@Column(name="description")
	public String description;
    

    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }

    public Integer getId_user(){
        return id_user;
    }
    public void setId_user(Integer id_user){
        this.id_user=id_user;
    }

    public Integer getId_problem(){
        return id_problem;
    }
    public void setId_problem(Integer id_problem){
        this.id_problem=id_problem;
    }


    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description=description;
    }



	
}