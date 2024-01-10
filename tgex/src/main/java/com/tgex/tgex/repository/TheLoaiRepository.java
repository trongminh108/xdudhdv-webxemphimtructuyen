package com.tgex.tgex.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.TheLoai;

@Repository
public interface TheLoaiRepository extends JpaRepository<TheLoai, String> {
    Optional<TheLoai> findByTenTheLoai(String tenTheLoai);

    @Query("SELECT c FROM TheLoai c JOIN Phim_TheLoai ptl ON c.id = ptl.idTheLoai WHERE ptl.idPhim = :idPhim")
    List<TheLoai> findTheLoaiByPhimId(@Param("idPhim") String idPhim);

    @Query("SELECT c.id FROM TheLoai c")
    List<String> findAllIdTheLoai();
}
