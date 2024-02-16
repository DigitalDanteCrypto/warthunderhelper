package dev.warthunderapptool.planes.repository;

import dev.warthunderapptool.planes.Plane;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PlaneRepository extends MongoRepository<Plane, String> {
    // MongoDB repository for Plane documents
    Optional<Plane> findByName(String name);

}