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
@Table(name = "producto")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Producto implements Serializable {
    private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="name")
	public String nombre;
	@Column(name="expire_date")
	public LocalDate fecha_vencimiento;
	@Column(name="category")
	public String categoria;
	@Column(name="price")
	public Integer precio;
	@Column(name="code")
	public Integer codigo;

    //@Column(nullable = false, updatable = false)
    //@Temporal(TemporalType.TIMESTAMP)
    //@CreatedDate
    //private Date createdAt;

    //@Column(nullable = false)
    //@Temporal(TemporalType.TIMESTAMP)
    //@LastModifiedDate
    //private Date updatedAt;

    public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Integer getCodigo() {
		return codigo;
	}
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public LocalDate getFecha_vencimiento() {
		return fecha_vencimiento;
	}
	public void setFecha_vencimiento(LocalDate fecha_vencimiento) {
		this.fecha_vencimiento = fecha_vencimiento;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public Integer getPrecio() {
		return precio;
	}
	public void setPrecio(Integer precio) {
		this.precio = precio;
	}
	
}