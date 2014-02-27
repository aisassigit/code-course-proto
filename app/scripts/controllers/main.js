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
        //any programmatic configuration?
        $scope.codeEdit = _editor;
    };

    $scope.aceChanged = function(e) {
        console.log('submit code here...');
        //any actions that need to take place on console change?
    };

    $scope.saveCode = function(){
        var code = $scope.codeEdit.getValue();
        if(code != ''){
            var ln = $scope.codeEdit.selection.getCursor().row + 1;
            var col = $scope.codeEdit.selection.getCursor().column;
            $scope.feedback = 'Error at line: ' +ln+' : column: '+col;
        }else{
            $scope.feedback = '';
        }
    };

  });


