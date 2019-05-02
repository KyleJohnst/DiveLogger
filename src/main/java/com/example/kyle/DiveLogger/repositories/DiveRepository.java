package com.example.kyle.DiveLogger.repositories;

import com.example.kyle.DiveLogger.models.Dive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiveRepository extends JpaRepository<Dive, Long> {
}
