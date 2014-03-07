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
      $scope.assignments = Assignment.query();
      console.log($scope.assignments);


      $scope.items = ['Item 1', 'Item 2', 'Item 3'];
      $scope.addItem = function() {
          var newItemNo = $scope.items.length + 1;
          $scope.items.push('Item ' + newItemNo);
      };
  }]);

    appControllers.controller('TabsCtrl',['$scope',function($scope){
        $scope.tabs = [
            {title:'Editor',content:'', id:0, active:true}
        ];
        $scope.editors = [];
        $scope.terminals = [];
        $scope.addTab = function(){
            var tabId = $scope.tabs.length;
            var tabLabel = tabId+1;
            //console.log('next tab id: '+tabId)
            $scope.tabs.splice(tabId,0,{title:'Editor '+tabLabel, content:'', id:tabId, active:true});
        },
        $scope.closeTab = function(id){
            //console.log('remove id: '+id);
            if($scope.tabs.length !== 1){
                $scope.tabs.splice(id,1);
            }
        },

        $scope.aceLoaded = function(_editor) {
            console.log('instance of editor loaded...');
            $scope.editors.push(_editor);
        };

        $scope.terminalLoaded = function(_editor){
            _editor.commands.addCommand({
                name: 'enterKey',
                bindKey: {win: 'Enter',  mac: 'Enter'},
                exec: function() {
                    var terminalInst, code, ln, col;
                    //terminalInst = $scope.terminals[id];
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

        $scope.aceChanged = function(e) {
            console.log('submit code here...');
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
                $scope.feedback = 'Error at line: ' +ln+' : column: '+col;
            }else{
                $scope.feedback = '';
            }
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


