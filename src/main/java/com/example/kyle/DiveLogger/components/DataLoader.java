package com.example.kyle.DiveLogger.components;

import com.example.kyle.DiveLogger.models.Dive;
import com.example.kyle.DiveLogger.models.Location;
import com.example.kyle.DiveLogger.repositories.DiveRepository;
import com.example.kyle.DiveLogger.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    DiveRepository diveRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Location location = new Location("Scotland");
        locationRepository.save(location);
        Dive dive = new Dive("BoatShed", location, 34, 15, "42");
        diveRepository.save(dive);
}
}
