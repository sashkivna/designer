angular.module('designer.module')
    .directive('myDesigner', function (FOO_COMPONENT) {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/designer.template.html',

            link: function ($scope) {
                var fooComponentDescription = FOO_COMPONENT.descriptor;

                $scope.stencilComponents = [{
                    componentName: fooComponentDescription.componentName
                }];

                $scope.canvasComponents = [];

                $scope.inspectorComponent = null;
                $scope.displayInspector = false;

                $scope.definitions = {
                    comments: []
                };

                $scope.addComponentToCanvas = function () {
                    var componentDescriptor = FOO_COMPONENT.descriptor;

                    var componentModel = {
                        _name: componentDescriptor.componentName,
                        _type: componentDescriptor.type,
                        inspectorConfig: componentDescriptor.properties
                    };

                    for (var property in componentDescriptor.properties) {
                        componentModel[property] = null;
                    }

                    $scope.definitions.comments.push(componentModel);
                };

                $scope.specifyInspectorComponent = function (componentModel) {
                    $scope.inspectorComponent = componentModel;

                    $scope.displayInspector = true;
                };
            }
        };
    });