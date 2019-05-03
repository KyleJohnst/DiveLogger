package com.example.kyle.DiveLogger.components;

import com.example.kyle.DiveLogger.models.Dive;
import com.example.kyle.DiveLogger.models.GasTypes;
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
        Location scotland = new Location("Scotland");
        locationRepository.save(scotland);
        Location thailand = new Location("Thailand");
        locationRepository.save(thailand);
        Location colombia = new Location("Colombia");
        locationRepository.save(colombia);

        Dive dive = new Dive("BoatShed", scotland, 34, 15, 76);
        dive.setGasType(GasTypes.AIR);
        dive.setStartGasPres(280);
        dive.setEndGasPres(80);
        dive.setTankVol(20);
        diveRepository.save(dive);

        Dive dive2 = new Dive("SailRock", thailand, 33, 12, 46);
        dive2.setGasType(GasTypes.AIR);
        dive2.setStartGasPres(280);
        dive2.setEndGasPres(80);
        dive2.setTankVol(20);
        diveRepository.save(dive2);

        Dive dive3 = new Dive("San Andres", colombia, 22, 10, 35);
        dive3.setGasType(GasTypes.AIR);
        dive3.setStartGasPres(280);
        dive3.setEndGasPres(80);
        dive3.setTankVol(20);
        diveRepository.save(dive3);

        Dive dive4 = new Dive("Summer Isles", scotland, 45, 25, 93);
        dive4.setGasType(GasTypes.TRIMIX);
        dive4.setStartGasPres(300);
        dive4.setEndGasPres(40);
        dive4.setTankVol(24);
        diveRepository.save(dive4);

        scotland.addDive(dive);
        thailand.addDive(dive2);
        colombia.addDive(dive3);
        scotland.addDive(dive4);

        System.out.println("\nFinished Seeding The Database");
        System.out.println("\nRunning on: http://localhost:8080/api/ use routes like locations or dives");
    }
}
