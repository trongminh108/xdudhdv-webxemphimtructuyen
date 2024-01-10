package com.tgex.tgex.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.tgex.tgex.model.Phim_TheLoai;

@Repository
public interface Phim_TheLoaiRepository extends JpaRepository<Phim_TheLoai, String> {
    List<Phim_TheLoai> findByIdPhim(String idPhim);

    @Query("SELECT c.id FROM Phim_TheLoai c")
    List<String> findAllIdPhimTheLoai();

    @Modifying
    @Transactional
    @Query("DELETE FROM Phim_TheLoai ptl WHERE ptl.idPhim = :idPhim")
    void deleteAllByIdPhim(@Param("idPhim") String idPhim);
}
