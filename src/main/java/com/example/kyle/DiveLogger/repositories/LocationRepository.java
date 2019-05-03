package com.example.kyle.DiveLogger.repositories;

import com.example.kyle.DiveLogger.models.Location;
import com.example.kyle.DiveLogger.projections.EmbeddedLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbeddedLocation.class)
public interface LocationRepository extends JpaRepository<Location, Long> {
}
