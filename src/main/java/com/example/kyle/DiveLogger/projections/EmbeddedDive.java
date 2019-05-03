package com.example.kyle.DiveLogger.projections;

import com.example.kyle.DiveLogger.models.Dive;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embededDive", types = Dive.class)
public interface EmbeddedDive {
}
