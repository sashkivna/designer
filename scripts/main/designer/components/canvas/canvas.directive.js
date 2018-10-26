angular.module('designer.module')
    .directive('myCanvas', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/canvas/canvas.template.html',

            scope: {
                components: '=',
                onSelect: '&'
            },

            link: function ($scope) {
                $scope.selectedComponent = null;

                $scope.selectFromCanvas = function (component) {
                    $scope.selectedComponent = component;

                    $scope.onSelect({
                        component: $scope.selectedComponent
                    });
                }
            }
        };
    });