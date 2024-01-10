package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "quocgia")
public class QuocGia {

    @Id
    private String id;

    @Column(name = "tenQuocGia")
    private String tenQuocGia;

    public QuocGia() {
    }

    public QuocGia(String id, String tenQuocGia) {
        this.id = id;
        this.tenQuocGia = tenQuocGia;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTenQuocGia() {
        return tenQuocGia;
    }

    public void setTenQuocGia(String tenQuocGia) {
        this.tenQuocGia = tenQuocGia;
    }

}
