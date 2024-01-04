package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "phim_dienvien")
public class Phim_DienVien {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "idPhim")
    private int idPhim;

    @Column(name = "idDienVien")
    private int idDienVien;

    public Phim_DienVien() {
    }

    public Phim_DienVien(int id, int idPhim, int idDienVien) {
        this.id = id;
        this.idPhim = idPhim;
        this.idDienVien = idDienVien;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdPhim() {
        return idPhim;
    }

    public void setIdPhim(int idPhim) {
        this.idPhim = idPhim;
    }

    public int getIdDienVien() {
        return idDienVien;
    }

    public void setIdDienVien(int idDienVien) {
        this.idDienVien = idDienVien;
    }
}