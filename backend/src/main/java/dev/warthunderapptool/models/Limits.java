package dev.warthunderapptool.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Limits {
    private int wings;
    private int gear;
    private List<Flap> flaps;
}
