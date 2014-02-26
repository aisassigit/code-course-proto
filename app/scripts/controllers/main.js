'use strict';

angular.module('codeCourseProtoApp',['ui.ace','ui.bootstrap'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.aceLoaded = function(_editor) {
        console.log('editor loaded...');
        $scope.codeEdit = _editor;
    };

    $scope.aceChanged = function(e) {
        console.log('submit code here...')
    };

    $scope.saveCode = function(){
        console.log($scope.codeEdit.getValue());
    };

  })


