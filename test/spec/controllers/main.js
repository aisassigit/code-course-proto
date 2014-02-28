'use strict';

describe('App Controllers', function () {

  // load the controller's module
  beforeEach(module('codeCourseProtoApp'));


    describe('MainCtrl', function(){
        var ctrl,
            scope;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {$scope: scope});
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            expect(scope.awesomeThings.length).toBe(3);
        });

    });
});
