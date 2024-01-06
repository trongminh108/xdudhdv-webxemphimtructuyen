package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.QuocGia;

@Repository
public interface QuocGiaRepository extends JpaRepository<QuocGia, String> {
    Optional<QuocGia> findBytenQuocGia(String tenQuocGia);
}