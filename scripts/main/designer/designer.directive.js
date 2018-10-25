angular.module('designer.module')
    .directive('myDesigner', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/designer.template.html',

            link: function ($scope) {
                var fooComponentDescription = {
                    name: 'foo',
                    type: 'foo-component'
                };

                $scope.stencilComponents = [fooComponentDescription];
                $scope.canvasComponents = [];

                $scope.inspectorComponent = null;
                $scope.displayInspector = false;

                $scope.definitions = {
                    comments: []
                };

                $scope.addComponentToCanvas = function (componentDescriptor) {
                    debugger;
                    $scope.canvasComponents.push(componentDescriptor);

                    var componentModel = {
                        name: componentDescriptor.name,
                        label: 'enter label',
                        type: componentDescriptor.type,
                    };

                    $scope.definitions.comments.push(componentModel);
                };

                $scope.specifyInspectorComponent = function ($index) {
                    $scope.inspectorComponent = $scope.definitions.comments[$index];
                    $scope.displayInspector = true;
                };
            }
        };
    });