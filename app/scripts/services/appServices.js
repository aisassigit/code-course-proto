'use strict'

/* Services */

var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Assignment',['$resource',function($resource){
    return $resource('http://localhost/~aisassi/code-course-proto/data/assignments.json',{'query':{method:'GET',isArray:true}});
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