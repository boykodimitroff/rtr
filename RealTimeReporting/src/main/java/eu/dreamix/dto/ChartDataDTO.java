package eu.dreamix.dto;

/**
 * Data transfer object which holds values transferred to the chart
 * @author Boyko Dimitrov on 11/28/16.
 */
public class ChartDataDTO {

    private Long xAxis;
    private Integer yAxis;

    public ChartDataDTO(Long xAxis, Integer yAxis) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }

    public Long getxAxis() {
        return xAxis;
    }

    public Integer getyAxis() {
        return yAxis;
    }
}
