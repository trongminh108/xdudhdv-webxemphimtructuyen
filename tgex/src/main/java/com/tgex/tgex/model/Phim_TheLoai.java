package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "phim_theloai")
public class Phim_TheLoai {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "idPhim")
    private int idPhim;

    @Column(name = "idTheLoai")
    private int idTheLoai;

    public Phim_TheLoai() {
    }

    public Phim_TheLoai(int id, int idPhim, int idTheLoai) {
        this.id = id;
        this.idPhim = idPhim;
        this.idTheLoai = idTheLoai;
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

    public int getIdTheLoai() {
        return idTheLoai;
    }

    public void setIdTheLoai(int idTheLoai) {
        this.idTheLoai = idTheLoai;
    }
}