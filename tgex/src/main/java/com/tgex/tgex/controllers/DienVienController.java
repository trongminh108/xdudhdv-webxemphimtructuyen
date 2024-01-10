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
import com.tgex.tgex.model.DienVien;
import com.tgex.tgex.model.TheLoai;
import com.tgex.tgex.repository.DienVienRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DienVienController {

    @Autowired
    private DienVienRepository repository;

    @GetMapping("/actors")
    public List<DienVien> getAllObjects() {
        return repository.findAll();
    }

    @PostMapping("/actors")
    public DienVien createObject(@RequestBody DienVien object) {
        return repository.save(object);
    }

    @GetMapping("/actors/{id}")
    public ResponseEntity<DienVien> getObjectById(@PathVariable String id) {
        DienVien object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));
        return ResponseEntity.ok(object);
    }

    @GetMapping("/actors/{tenDienVien}")
    public ResponseEntity<DienVien> getObjectByName(@PathVariable String name) {
        Optional<DienVien> object = repository.findByTenDienVien(name);

        if (object.isPresent()) {
            return ResponseEntity.ok(object.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/actors/{id}")
    public ResponseEntity<DienVien> updateObject(@PathVariable String id, @RequestBody DienVien newObject) {
        DienVien object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        object.setTenTheLoai(newObject.getTenDienVien());

        DienVien updatedObject = repository.save(object);
        return ResponseEntity.ok(updatedObject);
    }

    @DeleteMapping("/actors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteObject(@PathVariable String id) {
        DienVien object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        repository.delete(object);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/film_actors/{idPhim}")
    public ResponseEntity<List<DienVien>> getObjectsByIdPhim(@PathVariable String idPhim) {
        List<DienVien> objects = repository.findObjectsByIdPhim(idPhim);

        if (objects.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(objects);
    }
}
