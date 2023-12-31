package com.tgex.tgex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.Phim;

@Repository
public interface PhimRepository extends JpaRepository<Phim, String> {
    Optional<Phim> findByTenVietTat(String tenVietTat);
}
