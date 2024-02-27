package dev.warthunderapptool.service;


import dev.warthunderapptool.models.Plane;
import dev.warthunderapptool.repository.PlaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PlaneService {
    @Autowired
    private PlaneRepository planeRepository;

    public List<Plane> allPlanes() {
        return planeRepository.findAll();
    }

    public Optional<Plane> findByName(String name) {
        return planeRepository.findByName(name);
    }
}
