package com.tgex.tgex.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.tgex.tgex.exception.ResourceNotFoundException;
import com.tgex.tgex.model.DaoDien;
import com.tgex.tgex.repository.DaoDienRepository;

@RestController
public class DaoDienController {

    @Autowired
    private DaoDienRepository daoDienRepository;

    @GetMapping("/directors")
    public List<DaoDien> getAllDirectors() {
        return daoDienRepository.findAll();
    }

    @PostMapping("/directors")
    public DaoDien createDaoDien(@RequestBody DaoDien daoDien) {
        return daoDienRepository.save(daoDien);
    }

    @GetMapping("/directors/{id}")
    public ResponseEntity<DaoDien> getDaoDienById(@PathVariable String id) {
        DaoDien daoDien = daoDienRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("daoDien not exist with id :" + id));
        return ResponseEntity.ok(daoDien);
    }

    @GetMapping("/director/{tenDaoDien}")
    public ResponseEntity<DaoDien> getDaoDienByName(@PathVariable String tenDaoDien) {
        Optional<DaoDien> daoDien = daoDienRepository.findByTenDaoDien(tenDaoDien);

        if (daoDien.isPresent()) {
            return ResponseEntity.ok(daoDien.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/directors/{id}")
    public ResponseEntity<DaoDien> updateDaoDien(@PathVariable String id, @RequestBody DaoDien newDaoDien) {
        DaoDien daoDien = daoDienRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Director not exist with id :" + id));

        daoDien.setTenDaoDien(newDaoDien.getTenDaoDien());

        DaoDien updatedDaoDien = daoDienRepository.save(daoDien);
        return ResponseEntity.ok(updatedDaoDien);
    }

    @DeleteMapping("/directors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDaoDien(@PathVariable String id) {
        DaoDien daoDien = daoDienRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("daoDien not exist with id :" + id));

        daoDienRepository.delete(daoDien);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
