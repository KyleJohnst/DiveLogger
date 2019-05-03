package com.example.kyle.DiveLogger.projections;

import com.example.kyle.DiveLogger.models.Dive;
import com.example.kyle.DiveLogger.models.Location;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embeddedLocation", types = Location.class)
public interface EmbeddedLocation {
    String getName();
    List<Dive> getDives();
}
