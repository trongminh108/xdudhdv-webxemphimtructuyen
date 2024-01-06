package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.DaoDien;

@Repository
public interface DaoDienRepository extends JpaRepository<DaoDien, String> {
    Optional<DaoDien> findByTenDaoDien(String tenDaoDien);
}
