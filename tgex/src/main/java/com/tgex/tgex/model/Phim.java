package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "phim")
public class Phim {

    @Id
    private String id;

    @Column(name = "ten_viet_tat")
    private String tenVietTat;

    @Column(name = "ten_phim")
    private String tenPhim;

    @Column(name = "nam_phat_hanh")
    private int namPhatHanh;

    @Column(name = "quoc_gia")
    private String quocGia;

    @Column(name = "dao_dien")
    private String daoDien;

    @Column(name = "loai_phim")
    private String loaiPhim;

    @Column(name = "link_phim")
    private String linkPhim;

    @Column(name = "luot_xem")
    private int luotXem;

    @Column(name = "danh_gia")
    private float danhGia;

    @Column(name = "poster")
    private String poster;

    @Column(name = "mo_ta")
    private String moTa;

    public Phim(String id, String tenVietTat, String tenPhim, int namPhatHanh, String quocGia, String daoDien,
            String loaiPhim,
            String linkPhim, int luotXem, float danhGia, String poster, String moTa) {
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
        this.poster = poster;
        this.moTa = moTa;
    }

    public Phim() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String gettenVietTat() {
        return tenVietTat;
    }

    public void settenVietTat(String tenVietTat) {
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

    public String getQuocGia() {
        return quocGia;
    }

    public void setQuocGia(String quocGia) {
        this.quocGia = quocGia;
    }

    public String getDaoDien() {
        return daoDien;
    }

    public void setDaoDien(String daoDien) {
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

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

}
