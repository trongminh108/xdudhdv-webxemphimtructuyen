package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "taikhoan")
public class TaiKhoan {

    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private int id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String tenTaiKhoan;

    @Column(name = "matKhau")
    private String matKhau;

    @Column(name = "loaiQuyen")
    private int loaiQuyen;

    public TaiKhoan(String tenTaiKhoan, String matKhau, int loaiQuyen) {
        this.tenTaiKhoan = tenTaiKhoan;
        this.matKhau = matKhau;
        this.loaiQuyen = loaiQuyen;
    }

    // getter và setter

    public TaiKhoan() {
    }

    public String getTenTaiKhoan() {
        return tenTaiKhoan;
    }

    public void setTenTaiKhoan(String tenTaiKhoan) {
        this.tenTaiKhoan = tenTaiKhoan;
    }

    public String getMatKhau() {
        return matKhau;
    }

    public void setMatKhau(String matKhau) {
        this.matKhau = matKhau;
    }

    public int getLoaiQuyen() {
        return loaiQuyen;
    }

    public void setLoaiQuyen(int loaiQuyen) {
        this.loaiQuyen = loaiQuyen;
    }

}