angular.module('designer.module')
    .directive('myDesigner', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/designer.template.html',

            link: function ($scope) {
                var fooComponentDescription = {
                    label: 'foo',
                    type: 'foo-component'
                };

                $scope.stencilComponents = [fooComponentDescription];
                $scope.canvasComponents = [];

                $scope.addComponentToCanvas = function (component) {
                    $scope.canvasComponents.push(component);
                };


            }
        };
    });