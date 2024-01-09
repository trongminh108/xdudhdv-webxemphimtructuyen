package com.tgex.tgex.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.tgex.tgex.model.Phim;
import com.tgex.tgex.repository.PhimRepository;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class PhimController {

    @Autowired
    private PhimRepository phimRepository;

    @GetMapping("/films")
    public List<Phim> getAllFilms() {
        return phimRepository.findAll();
    }

    @GetMapping("/filmsDESC")
    public List<Phim> getFilmsByView() {
        return phimRepository.findAllByOrderByViewDesc();
    }

    @PostMapping("/films")
    public Phim createPhim(@RequestBody Phim phim) {
        return phimRepository.save(phim);
    }

    @GetMapping("/films/{id}")
    public ResponseEntity<Phim> getPhimById(@PathVariable String id) {
        Phim phim = phimRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Phim not exist with id :" + id));
        return ResponseEntity.ok(phim);
    }

    @GetMapping("/film/{tenVietTat}")
    public ResponseEntity<Phim> getPhimByShortName(@PathVariable String tenVietTat) {
        Optional<Phim> phim = phimRepository.findByTenVietTat(tenVietTat);

        if (phim.isPresent()) {
            return ResponseEntity.ok(phim.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/films/{id}")
    public ResponseEntity<Phim> updatePhim(@PathVariable String id, @RequestBody Phim phimDetails) {
        Phim phim = phimRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("phim not exist with id :" + id));

        phim.settenVietTat(phimDetails.gettenVietTat());
        phim.setTenPhim(phimDetails.getTenPhim());
        phim.setNamPhatHanh(phimDetails.getNamPhatHanh());
        phim.setQuocGia(phimDetails.getQuocGia());
        phim.setDaoDien(phimDetails.getDaoDien());
        phim.setLoaiPhim(phimDetails.getLoaiPhim());
        phim.setLinkPhim(phimDetails.getLinkPhim());
        phim.setLuotXem(phimDetails.getLuotXem());
        phim.setDanhGia(phimDetails.getDanhGia());
        phim.setPoster(phimDetails.getPoster());
        phim.setMoTa(phimDetails.getMoTa());

        Phim updatedPhim = phimRepository.save(phim);
        return ResponseEntity.ok(updatedPhim);
    }

    @DeleteMapping("/films/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePhim(@PathVariable String id) {
        Phim phim = phimRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("phim not exist with id :" + id));

        phimRepository.delete(phim);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
