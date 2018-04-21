package com.app.mingeso.controller;

import com.app.mingeso.exception.ResourceNotFoundException;
import com.app.mingeso.model.Producto;
import com.app.mingeso.repository.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductoController {

    @Autowired
    ProductoRepository productoRepository;


    @GetMapping("/productos")
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    @PostMapping("/productos")
    public Producto createProducto(@Valid @RequestBody Producto producto) {
        return productoRepository.save(producto);
    }
    
    @GetMapping("/productos/{id}")
    public Producto getProductoById(@PathVariable(value = "id") Integer productoId) {
        return productoRepository.findById(productoId)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", "id", productoId));
    }

    @PutMapping("/productos/{id}")
    public Producto updateProducto(@PathVariable(value = "id") Integer productoId,
                                            @Valid @RequestBody Producto productoDetails) {

    	Producto producto = productoRepository.findById(productoId)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", "id", productoId));

        producto.setCodigo(productoDetails.getCodigo());
        producto.setNombre(productoDetails.getNombre());
        producto.setFecha_vencimiento(productoDetails.getFecha_vencimiento());
        producto.setCategoria(productoDetails.getCategoria());
        producto.setPrecio(productoDetails.getPrecio());

        Producto updatedProducto = productoRepository.save(producto);
        return updatedProducto;
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<?> deleteProducto(@PathVariable(value = "id") Integer productoId) {
    	Producto note = productoRepository.findById(productoId)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", "id", productoId));

    	productoRepository.delete(note);

        return ResponseEntity.ok().build();
    }

}