'use strict';

var appControllers = angular.module('appControllers', []);

  appControllers.controller('AccordionCtrl',['$scope','Assignment',function($scope,Assignment){
      $scope.oneAtATime = true;
      $scope.groups = [
          {
              title: 'Instructions',
              content: 'These are the instructions'
          },
          {
              title: 'Starter Code',
              content: 'function(){}'
          }
      ];
      $scope.assignments = [];
      //$scope.assignments = Assignment.query();
      //console.log($scope.assignments);


      $scope.items = ['Item 1', 'Item 2', 'Item 3'];
      $scope.addItem = function() {
          var newItemNo = $scope.items.length + 1;
          $scope.items.push('Item ' + newItemNo);
      };
  }]);

    appControllers.controller('TabsCtrl',['$scope','resultsService',function($scope,resultsService){
        $scope.tabs = [
            {title:'Editor',content:'', id:0, active:true}
        ];
        $scope.editors = [];
        $scope.terminals = [];
        $scope.addTab = function(){
            var tabId = $scope.tabs.length;
            var tabLabel = tabId;
            $scope.tabs.splice(tabId,0,{title:'Editor '+tabLabel, content:'', id:tabId, active:true});
        },
        $scope.closeTab = function(id){
            var len,i,tab;
            len = $scope.tabs.length;
            if(id !== 0){
                for(i=1;i<len;i++){ //may need to add underscore lib for loops, filters
                    tab = $scope.tabs[i];
                    if(tab !== undefined){
                        if(tab.id === id){
                            $scope.tabs.splice(i,1);
                        }
                    }
                }
            }
        },
        $scope.editorLoaded = function(_editor) {
            console.log('instance of editor loaded...');
            $scope.editors.push(_editor);
        };
        $scope.terminalLoaded = function(_editor){
            _editor.commands.addCommand({
                name: 'enterKey',
                bindKey: {win: 'Enter',  mac: 'Enter'},
                exec: function() {
                    var code, ln, col;
                    code = _editor.getValue();
                    if(code !== ''){
                        ln = _editor.selection.getCursor().row + 1;
                        col = _editor.selection.getCursor().column;
                        _editor.setValue('Error at line: ' +ln+' : column: '+col);
                    }else{
                        _editor.setValue('');
                    }

                },
                readOnly: true // false if this command should not apply in readOnly mode
            });
            $scope.terminals.push(_editor)
        },
        $scope.editorChanged = function(_editor) {
            console.log('editor instance changed'+_editor);
            //any actions that need to take place on console change?
        };

        $scope.terminalChanged = function(e) {
            console.log('terminal update here...');
            //any actions that need to take place on console change?
        };

        $scope.saveCode = function(id){
            var editorInst,code,ln,col;
            editorInst = $scope.editors[id];
            code = editorInst.getValue();
            if(code !== ''){
                ln = editorInst.selection.getCursor().row + 1;
                col = editorInst.selection.getCursor().column;
                resultsService.setResult('Error at line: ' +ln+' : column: '+col);
                console.log('event sent on id:'+id);
            }else{
                resultsService.setResult('');
            }
        };

        $scope.sendTerminal = function(){
            $scope['codeMirror1'].setValue('Terminal output')
        };



    }]);

  appControllers.controller('ResultsCtrl',['$scope','resultsService',function($scope,resultsService){
      $scope.results = 'No code submit yet...'
      $scope.$on('handleResult',function(){
          $scope.results = resultsService.result;
      })
  }]);

  appControllers.controller('MainCtrl',['$scope', function ($scope) {
    $scope.initArrTest = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);


