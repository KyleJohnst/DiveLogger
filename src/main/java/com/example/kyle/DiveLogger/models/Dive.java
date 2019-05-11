package com.example.kyle.DiveLogger.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "dives")
public class Dive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diveId;

    @Column(name = "siteName")
    private String siteName;

  @JsonIgnoreProperties(value = "location")
    @ManyToOne
    @JoinColumn(name = "locationId", nullable = false)
    private Location location;

    @Column(name = "gasType")
    private GasTypes gasType;

    @Column(name = "startGas")
    private int startGasPres;

    @Column(name = "endGas")
    private int endGasPres;

    @Column(name = "tankVol")
    private int tankVol;

    @Column(name = "maxDepth")
    private int maxDepth;

    @Column(name = "avgDepth")
    private int avgDepth;

    @Column(name = "diveTime")
    private int diveTime;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "longitude")
    private String longitude;

    public Dive(String siteName, Location location, int maxDepth, int avgDepth, int diveTime) {
        this.siteName = siteName;
        this.location = location;
        this.maxDepth = maxDepth;
        this.avgDepth = avgDepth;
        this.diveTime = diveTime;
    }

    public Dive() {
    }

    public Long getId() {
        return diveId;
    }

    public void setId(Long id) {
        this.diveId = id;
    }

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public GasTypes getGasType() {
        return gasType;
    }

    public void setGasType(GasTypes type){
        this.gasType = type;
    }

    public int getStartGasPres() {
        return startGasPres;
    }

    public void setStartGasPres(int startGasPres) {
        this.startGasPres = startGasPres;
    }

    public int getEndGasPres() {
        return endGasPres;
    }

    public void setEndGasPres(int endGasPres) {
        this.endGasPres = endGasPres;
    }

    public int getTankVol() {
        return tankVol;
    }

    public void setTankVol(int tankVol) {
        this.tankVol = tankVol;
    }

    public int getMaxDepth() {
        return maxDepth;
    }

    public void setMaxDepth(int maxDepth) {
        this.maxDepth = maxDepth;
    }

    public int getAvgDepth() {
        return avgDepth;
    }

    public void setAvgDepth(int aveDepth) {
        this.avgDepth = aveDepth;
    }

    public int getDiveTime() {
        return diveTime;
    }

    public void setDiveTime(int diveTime) {
        this.diveTime = diveTime;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
}
