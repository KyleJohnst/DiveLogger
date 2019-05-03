package com.example.kyle.DiveLogger;

import com.example.kyle.DiveLogger.models.Dive;
import com.example.kyle.DiveLogger.models.Location;
import com.example.kyle.DiveLogger.repositories.DiveRepository;
import com.example.kyle.DiveLogger.repositories.LocationRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DiveLoggerApplicationTests {


	@Autowired
	DiveRepository diveRepository;

	@Autowired
	LocationRepository locationRepository;

	@Test
	public void contextLoads() {
	}


	@Test
	public void canCreateLocation__AndDive() {
		Location location = new Location("Scotland");
		locationRepository.save(location);
		Dive dive = new Dive("BoatShed", location, 34, 15, 42);
		diveRepository.save(dive);
	}

}
