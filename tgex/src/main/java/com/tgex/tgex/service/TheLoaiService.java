package com.tgex.tgex.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tgex.tgex.repository.TheLoaiRepository;

@Service
public class TheLoaiService {

    @Autowired
    private TheLoaiRepository repository;

    public Integer getLatestTheLoaiId() {
        List<String> allId = repository.findAllIdTheLoai();

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
