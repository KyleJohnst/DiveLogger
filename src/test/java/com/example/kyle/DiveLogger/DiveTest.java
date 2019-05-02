package com.example.kyle.DiveLogger;

import com.example.kyle.DiveLogger.models.Dive;
import com.example.kyle.DiveLogger.models.GasTypes;
import com.example.kyle.DiveLogger.models.Location;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DiveTest {
    public Location location;
    public Dive dive;

    @Before
    public void setUp() {
        location = new Location("Scotland");
        dive = new Dive("BoatShed", location, 34, 15, "42");
    }

    @Test
    public void hasName() {
        assertEquals("BoatShed", dive.getSiteName());
    }

    @Test
    public void hasLocation() {
        assertEquals(location, dive.getLocation());
    }

    @Test
    public void hasMaxDepth() {
        assertEquals(34, dive.getMaxDepth());
    }

    @Test
    public void hasAveDepth() {
        assertEquals(15, dive.getAveDepth());
    }

    @Test
    public void hasDiveTime() {
        assertEquals("42", dive.getDiveTime());
    }

    @Test
    public void canSetGasType() {
        dive.setGasType(GasTypes.AIR);
        assertEquals(GasTypes.AIR, dive.getGasType());
    }
}
