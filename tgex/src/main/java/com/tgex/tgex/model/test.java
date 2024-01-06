package com.tgex.tgex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "test")
public class test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ho_ten")
    private String hoTen;

    public test(int id, String hoTen) {
        this.id = id;
        this.hoTen = hoTen;
    }

    public test() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

}
