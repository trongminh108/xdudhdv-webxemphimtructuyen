package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.Phim_TheLoai;

@Repository
public interface Phim_TheLoaiRepository extends JpaRepository<Phim_TheLoai, String> {
}
