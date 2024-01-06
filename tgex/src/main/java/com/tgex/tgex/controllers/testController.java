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
import com.tgex.tgex.model.test;
import com.tgex.tgex.repository.DienVienRepository;
import com.tgex.tgex.repository.testRepository;

@RestController
public class testController {
    @Autowired
    private testRepository repository;

    @GetMapping("/test")
    public List<test> getAllObjects() {
        return repository.findAll();
    }

    @PostMapping("/test")
    public test createObject(@RequestBody test object) {
        return repository.save(object);
    }

}
