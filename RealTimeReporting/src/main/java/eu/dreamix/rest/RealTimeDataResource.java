package eu.dreamix.rest;

import eu.dreamix.dto.ChartDataDTO;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

/**
 * REST Controller which retrieves data used in the chart.
 * @author Boyko Dimitrov on 11/28/16.
 */
@RestController
@RequestMapping("/real-time-data")
public class RealTimeDataResource {

    @RequestMapping(value = "/data", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getData() {
        return ResponseEntity.ok(new ChartDataDTO(System.currentTimeMillis(), new Random().nextInt(100)));
    }
}
