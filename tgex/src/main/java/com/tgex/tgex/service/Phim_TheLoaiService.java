package com.tgex.tgex.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tgex.tgex.exception.ResourceNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

import com.tgex.tgex.model.Phim_TheLoai;
import com.tgex.tgex.repository.Phim_TheLoaiRepository;

@Service
public class Phim_TheLoaiService {

    @Autowired
    private Phim_TheLoaiRepository repository;

    public List<Phim_TheLoai> findObjectsByIdPhim(String idPhim) {
        List<Phim_TheLoai> objects = repository.findByIdPhim(idPhim);

        if (objects.isEmpty()) {
            throw new ResourceNotFoundException("Objects not exist with idPhim: " + idPhim);
        }

        return objects;
    }

    public Integer getLatestPhimTheLoaiId() {
        List<String> allId = repository.findAllIdPhimTheLoai();

        List<Integer> integerList = allId.stream()
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        Integer maxValue = integerList.stream()
                .mapToInt(Integer::intValue)
                .max()
                .orElseThrow();

        // Trả về giá trị id nếu tìm thấy.
        return maxValue;
    }
}
