package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.Phim_DienVien;

@Repository
public interface Phim_DienVienRepository extends JpaRepository<Phim_DienVien, String> {
}