package com.example.kyle.DiveLogger.repositories;

import com.example.kyle.DiveLogger.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}
