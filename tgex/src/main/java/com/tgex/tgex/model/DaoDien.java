package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "daodien")
public class DaoDien {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "tenDaoDien")
    private String tenDaoDien;

    public DaoDien() {
    }

    public DaoDien(int id, String tenDaoDien) {
        this.id = id;
        this.tenDaoDien = tenDaoDien;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenDaoDien() {
        return tenDaoDien;
    }

    public void setTenDaoDien(String tenDaoDien) {
        this.tenDaoDien = tenDaoDien;
    }

}
