package com.example.kyle.DiveLogger;

import com.example.kyle.DiveLogger.models.Dive;
import com.example.kyle.DiveLogger.models.Location;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LocationTest {
    public Location location1;
    public Dive dive;

    @Before
    public void setUp() {
        location1 = new Location("Scotland");
        dive = new Dive("BoatShed", location1, 34,15,25);
    }

    @Test
    public void hasName() {
        assertEquals("Scotland", location1.getName());
    }

    @Test
    public void canCountDives() {
        assertEquals(0, location1.countDives());
    }

    @Test
    public void canAdd_A_Dive() {
        location1.addDive(dive);
        assertEquals(1, location1.countDives());
    }
}
