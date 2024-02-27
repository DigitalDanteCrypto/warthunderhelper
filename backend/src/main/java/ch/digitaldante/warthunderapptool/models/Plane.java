package ch.digitaldante.warthunderapptool.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.util.Map;

@Document(collection = "planes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plane {
    @Id
    private String id;
    private String name;
    private double battleRating;
    private String country;
    private int maxAltitude;
    private int maxSpeed;
    private TurnTime turnTime;
    private List<String> features;
    private Limits limits;
    private Map<String, String> armament;
}

@Data
@NoArgsConstructor
@AllArgsConstructor
class TurnTime {
    private double stock;
    private double upgraded;
}

@Data
@NoArgsConstructor
@AllArgsConstructor
class Limits {
    private int wings;
    private int gear;
    private List<Flap> flaps;
}

@Data
@NoArgsConstructor
@AllArgsConstructor
class Flap {
    private int combat;
    private int take_off;
    private int landing;
}
