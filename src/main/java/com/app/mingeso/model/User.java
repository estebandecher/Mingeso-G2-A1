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
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="email")
	public String email;
	@Column(name="password")
	public String password;
	@Column(name="role")
	public Integer role;
	@Column(name="name")
    public String name;
    

    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email=email;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password=password;
    }

    public Integer getRole(){
        return role;
    }
    public void setRole(Integer role){
        this.role=role;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }



	
}