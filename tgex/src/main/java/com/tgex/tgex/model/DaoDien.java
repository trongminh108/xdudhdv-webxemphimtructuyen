package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "daodien")
public class DaoDien {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @Column(name = "tenDaoDien")
    private String tenDaoDien;

    public DaoDien() {
    }

    public DaoDien(String id, String tenDaoDien) {
        this.id = id;
        this.tenDaoDien = tenDaoDien;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTenDaoDien() {
        return tenDaoDien;
    }

    public void setTenDaoDien(String tenDaoDien) {
        this.tenDaoDien = tenDaoDien;
    }

}
