package com.tgex.tgex.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.Phim;

@Repository
public interface PhimRepository extends JpaRepository<Phim, String> {
    Optional<Phim> findByTenVietTat(String tenVietTat);

    @Query("SELECT f FROM Phim f ORDER BY f.luotXem DESC LIMIT 5")
    List<Phim> findAllByOrderByViewDesc();

    @Query("SELECT c.id FROM Phim c")
    List<String> findAllIdPhim();
}
