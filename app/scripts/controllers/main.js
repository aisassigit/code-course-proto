'use strict';

var appControllers = angular.module('appControllers', []);

  appControllers.controller('AccordionCtrl',['$scope',function($scope){
      $scope.oneAtATime = true;
      $scope.groups = [
          {
              title: "Instructions",
              content: "These are the instructions"
          },
          {
              title: "Starter Code",
              content: "function(){}"
          }
      ];
      $scope.items = ['Item 1', 'Item 2', 'Item 3'];
      $scope.addItem = function() {
          var newItemNo = $scope.items.length + 1;
          $scope.items.push('Item ' + newItemNo);
      };
  }]);

    appControllers.controller('TabsCtrl',['$scope',function($scope){
        $scope.tabs = [
            { title:"Dynamic Title 1", content:"Dynamic content 1" },
            { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
        ];

        $scope.showCodeMirror = function(n) {
            if($scope['codeMirror'+1] == undefined){
                var cc = document.getElementById('cm'+n); //this is ugly as heck, but is how cm documentation shows init
                var cm = CodeMirror.fromTextArea(cc);
                // Options
                cm.setOption('firstLineNumber',0);
                cm.setOption('theme','night');
                cm.setOption('lineNumbers',true);
                cm.setSize(500, 100);
                $scope['codeMirror'+n] = cm;
            }
        };

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
            //any on load code here...
        };

        $scope.sendTerminal = function(){
            $scope['codeMirror1'].setValue('Terminal output')
        };



    }]);

  appControllers.controller('MainCtrl',['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);


