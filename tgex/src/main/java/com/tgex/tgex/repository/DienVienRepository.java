package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.DienVien;

@Repository
public interface DienVienRepository extends JpaRepository<DienVien, String> {
    Optional<DienVien> findByTenDienVien(String tenDienVien);
}
