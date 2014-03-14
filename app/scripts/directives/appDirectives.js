'use strict';

var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('onEnter',[function(){

    var linkFn = function(scope,element,attrs) {
        element.bind("keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function() {
                    console.log('enter key press...');
                    scope.onenter(event.currentTarget.value);
                });
            }
        });
    };
    return {
        scope:{
            onenter:'&onEnter'
        },
        link:linkFn
    };
}]);


appDirectives.directive('terminal',[function(){

    var linkFn = function(scope,element,attrs) {
        element.terminal(function(command, term) {
            if (command !== '') {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        term.echo(new String(result));
                    }
                } catch(e) {
                    term.error(new String(e));
                }
            } else {
                term.echo('');
            }
        }, {
            greetings: 'Terminal emulator',
            height: 200,
            width: 590,
            prompt: 'student44$> '});
    };
    return {
        scope:{
            onenter:'&onEnter'
        },
        link:linkFn
    };
}]);