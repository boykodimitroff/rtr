(function() {
    'use strict';

    angular.module('RealTimeReporting').factory('RealTimeReportingChartService',
        RealTimeReportingChartService);

    RealTimeReportingChartService.$inject = [ 'RealTimeDataResource' ];

    function RealTimeReportingChartService(RealTimeDataResource) {
        var service = {};

        service.populateStackedBarChart = function() {
            var chart = new Highcharts.Chart({
                chart: {
                    type: 'column',
                    renderTo : 'realTimeDataBarChart',
                    events : {
                        load : function() {
                            setInterval(function() {
                                var firstSeries = chart.series[0];
                                var secondSeries = chart.series[1];
                                var categories = chart.xAxis[0].categories;
                                var categoriesLength = categories.length;
                                var yAxisValue;

                                RealTimeDataResource.getData().then(function(response) {
                                    var data = response.data;
                                    yAxisValue = data.yAxis;

                                    firstSeries.addPoint([categoriesLength, yAxisValue], false, true);
                                    secondSeries.addPoint([categoriesLength, yAxisValue + 10], false, true);

                                    var dateNow = new Date(data.xAxis);

                                    categories.push(dateNow.getHours() + ':'
                                        + (dateNow.getMinutes() <= 9 ? '0' +dateNow.getMinutes() : dateNow.getMinutes())
                                        + ':' +dateNow.getSeconds());
                                    chart.xAxis[0].setCategories(categories, false);

                                    chart.redraw();
                                });

                            }, 5000);
                        }
                    }
                },
                title: {
                    text : 'Real Time Data'
                },
                xAxis: {
                    categories: ['11:33:40', '11:33:41', '11:33:42', '11:33:43', '11:33:44',
                        '11:33:45', '11:33:46', '11:33:47', '11:33:48', '11:33:49'],
                },
                yAxis : {
                    title : {
                        text : 'Requests per 5 seconds',
                    },
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                    }
                },
                series: [{
                    data: [29, 71, 116, 60, 44, 17, 38, 51, 66, 100]
                }, {
                    data: [15, 29, 21, 11, 33, 56, 12, 44, 89, 22]
                }]
            })
        }

        return service;
    }
})();
