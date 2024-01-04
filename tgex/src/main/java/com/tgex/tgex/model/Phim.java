package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "phim")
public class Phim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tenVietTat")
    private String tenVietTat;

    @Column(name = "tenPhim")
    private String tenPhim;

    @Column(name = "namPhatHanh")
    private int namPhatHanh;

    @Column(name = "quocGia")
    private int quocGia;

    @Column(name = "daoDien")
    private int daoDien;

    @Column(name = "loaiPhim")
    private String loaiPhim;

    @Column(name = "linkPhim")
    private String linkPhim;

    @Column(name = "luotXem")
    private int luotXem;

    @Column(name = "danhGia")
    private float danhGia;

    @Column(name = "moTa")
    private String moTa;

    public Phim(int id, String tenVietTat, String tenPhim, int namPhatHanh, int quocGia, int daoDien, String loaiPhim,
            String linkPhim, int luotXem, float danhGia, String moTa) {
        this.id = id;
        this.tenVietTat = tenVietTat;
        this.tenPhim = tenPhim;
        this.namPhatHanh = namPhatHanh;
        this.quocGia = quocGia;
        this.daoDien = daoDien;
        this.loaiPhim = loaiPhim;
        this.linkPhim = linkPhim;
        this.luotXem = luotXem;
        this.danhGia = danhGia;
        this.moTa = moTa;
    }

    public Phim() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenVietTat() {
        return tenVietTat;
    }

    public void setTenVietTat(String tenVietTat) {
        this.tenVietTat = tenVietTat;
    }

    public String getTenPhim() {
        return tenPhim;
    }

    public void setTenPhim(String tenPhim) {
        this.tenPhim = tenPhim;
    }

    public int getNamPhatHanh() {
        return namPhatHanh;
    }

    public void setNamPhatHanh(int namPhatHanh) {
        this.namPhatHanh = namPhatHanh;
    }

    public int getQuocGia() {
        return quocGia;
    }

    public void setQuocGia(int quocGia) {
        this.quocGia = quocGia;
    }

    public int getDaoDien() {
        return daoDien;
    }

    public void setDaoDien(int daoDien) {
        this.daoDien = daoDien;
    }

    public String getLoaiPhim() {
        return loaiPhim;
    }

    public void setLoaiPhim(String loaiPhim) {
        this.loaiPhim = loaiPhim;
    }

    public String getLinkPhim() {
        return linkPhim;
    }

    public void setLinkPhim(String linkPhim) {
        this.linkPhim = linkPhim;
    }

    public int getLuotXem() {
        return luotXem;
    }

    public void setLuotXem(int luotXem) {
        this.luotXem = luotXem;
    }

    public float getDanhGia() {
        return danhGia;
    }

    public void setDanhGia(float danhGia) {
        this.danhGia = danhGia;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

}
