(function() {
    'use strict'

    var app = angular.module("RealTimeReporting");

    app.factory("RealTimeDataResource", RealTimeDataResource);

    RealTimeDataResource.$inject = ['$http'];

    function RealTimeDataResource($http) {

        var service = {};

        service.getData = function() {
            return $http({
                method : 'GET',
                url : '/real-time-data/data'
            });
        }

        return service;
    }

})();