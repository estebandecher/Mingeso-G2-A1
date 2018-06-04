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
@Table(name = "problem")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Problem implements Serializable {
    private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="id_user")
	public Integer id_user;
	@Column(name="description")
    public String description;
    @Column(name="title")
	public String title;
    

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


    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description=description;
    }


    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title=title;
    }



	
}