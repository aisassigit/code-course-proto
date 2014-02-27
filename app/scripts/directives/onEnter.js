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