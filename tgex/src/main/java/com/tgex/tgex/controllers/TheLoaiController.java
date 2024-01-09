package com.tgex.tgex.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tgex.tgex.exception.ResourceNotFoundException;
import com.tgex.tgex.model.TheLoai;
import com.tgex.tgex.repository.TheLoaiRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TheLoaiController {

    @Autowired
    private TheLoaiRepository repository;

    @GetMapping("/categories")
    public List<TheLoai> getAllObjects() {
        return repository.findAll();
    }

    @PostMapping("/categories")
    public TheLoai createObject(@RequestBody TheLoai object) {
        return repository.save(object);
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<TheLoai> getObjectById(@PathVariable String id) {
        TheLoai object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));
        return ResponseEntity.ok(object);
    }

    @GetMapping("/category/{tenTheLoai}")
    public ResponseEntity<TheLoai> getObjectByName(@PathVariable String name) {
        Optional<TheLoai> object = repository.findByTenTheLoai(name);

        if (object.isPresent()) {
            return ResponseEntity.ok(object.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<TheLoai> updateObject(@PathVariable String id, @RequestBody TheLoai newObject) {
        TheLoai object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        object.setTenTheLoai(newObject.getTenTheLoai());

        TheLoai updatedObject = repository.save(object);
        return ResponseEntity.ok(updatedObject);
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteObject(@PathVariable String id) {
        TheLoai object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        repository.delete(object);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
