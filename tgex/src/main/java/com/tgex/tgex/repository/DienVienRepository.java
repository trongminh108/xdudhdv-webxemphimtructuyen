package com.tgex.tgex.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tgex.tgex.model.DienVien;
import com.tgex.tgex.model.TheLoai;

@Repository
public interface DienVienRepository extends JpaRepository<DienVien, String> {
    Optional<DienVien> findByTenDienVien(String tenDienVien);

    @Query("SELECT a FROM DienVien a JOIN Phim_DienVien pdv ON a.id = pdv.idDienVien WHERE pdv.idPhim = :idPhim")
    List<DienVien> findObjectsByIdPhim(@Param("idPhim") String idPhim);
}
