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
                $scope.finalJSON = [];
                $scope.inspectorComponent = null;
                $scope.displayInspector = false;

                $scope.definitions = {
                    components: []
                };


                $scope.addComponentToCanvas = function () {
                    debugger;
                    var componentDescriptor = FOO_COMPONENT.descriptor;

                    var componentModel = {
                        _name: componentDescriptor.componentName,
                        _type: componentDescriptor.type,
                        inspectorConfig: componentDescriptor.properties
                    };

                    $scope.definitions.components.push(componentModel);
                };

                $scope.specifyInspectorComponent = function (componentModel) {
                    $scope.inspectorComponent = componentModel;
                    $scope.finalJSON.push($scope.inspectorComponent);
                    $scope.displayInspector = true;
                };
            }
        };
    });