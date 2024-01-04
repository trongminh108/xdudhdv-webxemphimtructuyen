package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "dienvien")
public class DienVien {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tenDienVien")
    private String tenDienVien;

    public DienVien() {
    }

    public DienVien(int id, String tenDienVien) {
        this.id = id;
        this.tenDienVien = tenDienVien;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenDienVien() {
        return tenDienVien;
    }

    public void setTenTheLoai(String tenDienVien) {
        this.tenDienVien = tenDienVien;
    }

}
