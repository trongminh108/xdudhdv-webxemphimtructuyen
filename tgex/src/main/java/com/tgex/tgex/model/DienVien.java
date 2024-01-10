package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "dienvien")
public class DienVien {

    @Id
    private String id;

    @Column(name = "tenDienVien")
    private String tenDienVien;

    public DienVien() {
    }

    public DienVien(String id, String tenDienVien) {
        this.id = id;
        this.tenDienVien = tenDienVien;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTenDienVien() {
        return tenDienVien;
    }

    public void setTenTheLoai(String tenDienVien) {
        this.tenDienVien = tenDienVien;
    }

}
