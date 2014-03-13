'use strict'

/* Services */

var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Assignment',['$resource','REST_API_ROOT',function($resource,REST_API_ROOT){
    return $resource(REST_API_ROOT+'assignments.json',{'query':{method:'GET',isArray:true}});
}]);


appServices.factory('resultsService', ['$rootScope',function($rootScope) {
    var resultsService = {};
    resultsService.results = '';

    resultsService.setResult = function(result){
        this.result = result;
        this.broadcastResults();
    };

    resultsService.broadcastResults = function() {
        $rootScope.$broadcast('handleResult');
    };
    return resultsService;
}]);