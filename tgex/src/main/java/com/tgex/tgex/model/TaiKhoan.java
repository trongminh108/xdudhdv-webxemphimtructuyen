package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "taikhoan")
public class TaiKhoan {

    @Id
    private String tenTaiKhoan;

    @Column(name = "matKhau")
    private String matKhau;

    @Column(name = "gmail")
    private String gmail;

    @Column(name = "loaiQuyen")
    private int loaiQuyen;

    public TaiKhoan(String tenTaiKhoan, String matKhau, String gmail, int loaiQuyen) {
        this.tenTaiKhoan = tenTaiKhoan;
        this.matKhau = matKhau;
        this.gmail = gmail;
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

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }

}