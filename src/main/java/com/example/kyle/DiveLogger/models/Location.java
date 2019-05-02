package com.example.kyle.DiveLogger.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( name = "name")
    private String name;

    @OneToMany(mappedBy = "location")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Dive> dives;


//    private List<Site> sites; will add sites in later

    public Location(String name) {
        this.name = name;
        this.dives = new ArrayList<>();
//        this.sites = new ArrayList<>();
    }

    public Location() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Dive> getDives() {
        return dives;
    }

    public void setDives(List<Dive> dives) {
        this.dives = dives;
    }

    public void addDive(Dive dive) {
        this.dives.add(dive);
    }

    public int countDives() {
        return this.dives.size();
    }
}
