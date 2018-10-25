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
                $scope.inspectorComponent = null;

                $scope.addComponentToCanvas = function (component) {
                    $scope.canvasComponents.push(component);
                };

                $scope.specifyInspectorComponent = function (component) {
                    $scope.inspectorComponent = component;
                    console.log($scope.inspectorComponent);
                };
            }
        };
    });