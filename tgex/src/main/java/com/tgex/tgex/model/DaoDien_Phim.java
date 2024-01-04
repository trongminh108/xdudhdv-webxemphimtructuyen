package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "daodien_phim")
public class DaoDien_Phim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "idPhim")
    private int idPhim;

    @Column(name = "idDaoDien")
    private int idDaoDien;

    public DaoDien_Phim(int id, int idPhim, int idDaoDien) {
        this.id = id;
        this.idPhim = idPhim;
        this.idDaoDien = idDaoDien;
    }

    public DaoDien_Phim() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdPhim() {
        return idPhim;
    }

    public void setIdPhim(int idPhim) {
        this.idPhim = idPhim;
    }

    public int getIdDaoDien() {
        return idDaoDien;
    }

    public void setIdDaoDien(int idDaoDien) {
        this.idDaoDien = idDaoDien;
    }

}
