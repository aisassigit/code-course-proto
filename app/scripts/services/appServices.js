'use strict'

/* Services */

var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Assignment',['$resource',function($resource){
    return $resource('http://localhost/~aisassi/code-course-proto/data/assignments.json',{'query':{method:'GET',isArray:true}});
}]);