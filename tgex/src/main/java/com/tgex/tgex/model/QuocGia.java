package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "quocgia")
public class QuocGia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tenQuocGia")
    private String tenQuocGia;

    public QuocGia() {
    }

    public QuocGia(int id, String tenQuocGia) {
        this.id = id;
        this.tenQuocGia = tenQuocGia;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenQuocGia() {
        return tenQuocGia;
    }

    public void setTenQuocGia(String tenQuocGia) {
        this.tenQuocGia = tenQuocGia;
    }

}
