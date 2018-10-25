angular.module('designer.module')
    .directive('myCanvas', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/canvas/canvas.template.html',

            scope: {
                components: '='
            }
        };
    });