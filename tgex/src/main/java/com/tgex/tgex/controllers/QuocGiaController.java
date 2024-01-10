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
import com.tgex.tgex.model.QuocGia;
import com.tgex.tgex.repository.QuocGiaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuocGiaController {

    @Autowired
    private QuocGiaRepository quocGiaRepository;

    @GetMapping("/countries")
    public List<QuocGia> getAllCountries() {
        return quocGiaRepository.findAll();
    }

    @PostMapping("/countries")
    public QuocGia createCountry(@RequestBody QuocGia country) {
        return quocGiaRepository.save(country);
    }

    @GetMapping("/countries/{id}")
    public ResponseEntity<QuocGia> getCountryById(@PathVariable String id) {
        QuocGia country = quocGiaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Country not exist with id :" + id));
        return ResponseEntity.ok(country);
    }

    @GetMapping("/country/{tenQuocGia}")
    public ResponseEntity<QuocGia> getCountryByName(@PathVariable String tenQuocGia) {
        Optional<QuocGia> quocGia = quocGiaRepository.findBytenQuocGia(tenQuocGia);

        if (quocGia.isPresent()) {
            return ResponseEntity.ok(quocGia.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/countries/{id}")
    public ResponseEntity<QuocGia> updateCountry(@PathVariable String id, @RequestBody QuocGia newCountry) {
        QuocGia quocGia = quocGiaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        quocGia.setTenQuocGia(newCountry.getTenQuocGia());

        QuocGia updatedDaoDien = quocGiaRepository.save(quocGia);
        return ResponseEntity.ok(updatedDaoDien);
    }

    @DeleteMapping("/countries/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCountry(@PathVariable String id) {
        QuocGia quocGia = quocGiaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Object not exist with id :" + id));

        quocGiaRepository.delete(quocGia);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
