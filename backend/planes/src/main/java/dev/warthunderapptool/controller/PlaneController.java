package dev.warthunderapptool.controller;

import dev.warthunderapptool.models.Plane;
import dev.warthunderapptool.service.PlaneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/planes")
public class PlaneController {

    private final PlaneService planeService;

    @Autowired
    public PlaneController(PlaneService planeService) {
        this.planeService = planeService;
    }

    @GetMapping
    public ResponseEntity<List<Plane>> getAllPlanes() {
        List<Plane> planes = planeService.allPlanes();
        return ResponseEntity.ok(planes);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Plane> getPlaneByName(@PathVariable String name) {
        Optional<Plane> plane = planeService.findByName(name);
        return plane.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
