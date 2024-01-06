package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "phim_theloai")
public class Phim_TheLoai {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "idPhim")
    private String idPhim;

    @Column(name = "idTheLoai")
    private String idTheLoai;

    public Phim_TheLoai() {
    }

    public Phim_TheLoai(String id, String idPhim, String idTheLoai) {
        this.id = id;
        this.idPhim = idPhim;
        this.idTheLoai = idTheLoai;
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

    public String getIdTheLoai() {
        return idTheLoai;
    }

    public void setIdTheLoai(String idTheLoai) {
        this.idTheLoai = idTheLoai;
    }
}