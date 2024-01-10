package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "phim_dienvien")
public class Phim_DienVien {

    @Id
    private String id;

    @Column(name = "idPhim")
    private String idPhim;

    @Column(name = "idDienVien")
    private String idDienVien;

    public Phim_DienVien() {
    }

    public Phim_DienVien(String id, String idPhim, String idDienVien) {
        this.id = id;
        this.idPhim = idPhim;
        this.idDienVien = idDienVien;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdPhim() {
        return idPhim;
    }

    public void setIdPhim(String idPhim) {
        this.idPhim = idPhim;
    }

    public String getIdDienVien() {
        return idDienVien;
    }

    public void setIdDienVien(String idDienVien) {
        this.idDienVien = idDienVien;
    }
}