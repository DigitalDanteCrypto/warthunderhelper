package dev.warthunderapptool.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flap {
    private int combat;
    private int take_off;
    private int landing;
}
