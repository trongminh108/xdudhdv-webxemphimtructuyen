package com.tgex.tgex.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tgex.tgex.exception.ResourceNotFoundException;
import com.tgex.tgex.model.Phim_DienVien;
import com.tgex.tgex.repository.Phim_DienVienRepository;

@RestController
public class Phim_DienVienController {

    @Autowired
    private Phim_DienVienRepository repository;

    @GetMapping("/films_actors")
    public List<Phim_DienVien> getAllObjects() {
        return repository.findAll();
    }

    @PostMapping("/films_actors")
    public Phim_DienVien createObject(@RequestBody Phim_DienVien object) {
        return repository.save(object);
    }

    @GetMapping("/films_actors/{id}")
    public ResponseEntity<Phim_DienVien> getObjectById(@PathVariable String id) {
        Phim_DienVien object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));
        return ResponseEntity.ok(object);
    }

    // @GetMapping("/category/{tenTheLoai}")
    // public ResponseEntity<Phim_DienVien> getObjectByName(@PathVariable String
    // name) {
    // Optional<Phim_DienVien> object = repository.findByTenTheLoai(name);

    // if (object.isPresent()) {
    // return ResponseEntity.ok(object.get());
    // } else {
    // return ResponseEntity.notFound().build();
    // }
    // }

    @PutMapping("/films_actors/{id}")
    public ResponseEntity<Phim_DienVien> updateObject(@PathVariable String id, @RequestBody Phim_DienVien newObject) {
        Phim_DienVien object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        object.setIdPhim(newObject.getIdPhim());
        object.setIdDienVien(newObject.getIdDienVien());

        Phim_DienVien updatedObject = repository.save(object);
        return ResponseEntity.ok(updatedObject);
    }

    @DeleteMapping("/films_actors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteObject(@PathVariable String id) {
        Phim_DienVien object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        repository.delete(object);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
