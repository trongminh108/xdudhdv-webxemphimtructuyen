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
import com.tgex.tgex.model.Phim_TheLoai;
import com.tgex.tgex.repository.Phim_TheLoaiRepository;
import com.tgex.tgex.repository.TheLoaiRepository;

@RestController
public class Phim_TheLoaiController {

    @Autowired
    private Phim_TheLoaiRepository repository;

    @GetMapping("/films_categories")
    public List<Phim_TheLoai> getAllObjects() {
        return repository.findAll();
    }

    @PostMapping("/films_categories")
    public Phim_TheLoai createObject(@RequestBody Phim_TheLoai object) {
        return repository.save(object);
    }

    @GetMapping("/films_categories/{id}")
    public ResponseEntity<Phim_TheLoai> getObjectById(@PathVariable String id) {
        Phim_TheLoai object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));
        return ResponseEntity.ok(object);
    }

    @PutMapping("/films_categories/{id}")
    public ResponseEntity<Phim_TheLoai> updateObject(@PathVariable String id, @RequestBody Phim_TheLoai newObject) {
        Phim_TheLoai object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        object.setIdPhim(newObject.getIdPhim());
        object.setIdTheLoai(newObject.getIdTheLoai());

        Phim_TheLoai updatedObject = repository.save(object);
        return ResponseEntity.ok(updatedObject);
    }

    @DeleteMapping("/films_categories/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteObject(@PathVariable String id) {
        Phim_TheLoai object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        repository.delete(object);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
