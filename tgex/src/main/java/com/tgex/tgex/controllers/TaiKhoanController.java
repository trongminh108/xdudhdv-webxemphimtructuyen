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
import com.tgex.tgex.model.TaiKhoan;
import com.tgex.tgex.repository.TaiKhoanRepository;

@RestController
public class TaiKhoanController {

    @Autowired
    private TaiKhoanRepository repository;

    @GetMapping("/accounts")
    public List<TaiKhoan> getAllObjects() {
        return repository.findAll();
    }

    @PostMapping("/accounts")
    public TaiKhoan createObject(@RequestBody TaiKhoan object) {
        return repository.save(object);
    }

    @GetMapping("/accounts/{id}")
    public ResponseEntity<TaiKhoan> getObjectById(@PathVariable String id) {
        TaiKhoan object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));
        return ResponseEntity.ok(object);
    }

    @GetMapping("/account/{tenTaiKhoan}")
    public ResponseEntity<TaiKhoan> getObjectByName(@PathVariable String name) {
        Optional<TaiKhoan> object = repository.findByTenTaiKhoan(name);

        if (object.isPresent()) {
            return ResponseEntity.ok(object.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/accounts/{id}")
    public ResponseEntity<TaiKhoan> updateObject(@PathVariable String id, @RequestBody TaiKhoan newObject) {
        TaiKhoan object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        object.setTenTaiKhoan(newObject.getTenTaiKhoan());
        object.setMatKhau(newObject.getMatKhau());
        object.setGmail(newObject.getGmail());
        object.setLoaiQuyen(newObject.getLoaiQuyen());

        TaiKhoan updatedObject = repository.save(object);
        return ResponseEntity.ok(updatedObject);
    }

    @DeleteMapping("/accounts/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteObject(@PathVariable String id) {
        TaiKhoan object = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        repository.delete(object);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
