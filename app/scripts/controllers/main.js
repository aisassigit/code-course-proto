'use strict';

var appControllers = angular.module('appControllers', []);

  appControllers.controller('MainCtrl',['$scope', function ($scope) {
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

    $scope.codemirrorLoaded = function(_editor){
            // Editor part
            var _doc = _editor.getDoc();

            _editor.focus();

            // Options
            _editor.setOption('firstLineNumber',0);
            _editor.setOption('theme','night');
            _editor.setOption('lineNumbers',true);
            _editor.setSize(500, 100);
            _doc.markClean();

            // Events
            _editor.on("beforeChange", function(){ });
            _editor.on("change", function(){console.log('onChange...')});

            _editor.setValue('Code Mirror displays outside a tab...');
            _editor.refresh();

            $scope.codeMirror = _editor;
        };

        $scope.sendTerminal = function(){
            $scope.codeMirror.setValue('Terminal output')
        };

  }]);


