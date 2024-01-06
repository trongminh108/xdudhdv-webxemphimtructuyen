package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.TheLoai;

@Repository
public interface TheLoaiRepository extends JpaRepository<TheLoai, String> {
    Optional<TheLoai> findByTenTheLoai(String tenTheLoai);
}
