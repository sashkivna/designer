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
                $scope.inspectorComponentIndex = null;
                $scope.definitions = {
                    components: []
                };
                $scope.settArr = [];


                $scope.addComponentToCanvas = function () {
                    var componentDescriptor = FOO_COMPONENT.descriptor;

                    var componentModel = {
                        _name: componentDescriptor.componentName,
                        _type: componentDescriptor.type,
                        inspectorConfig: componentDescriptor.properties
                    };

                    $scope.definitions.components.push(componentModel);
                };

                $scope.specifyInspectorComponent = function (componentModel, $index) {
                    $scope.inspectorComponent = componentModel;
                    $scope.inspectorComponentIndex = $index;
                    $scope.finalJSON[$index] = $scope.inspectorComponent;
                    $scope.displayInspector = true;
                };

                $scope.showFinalConfigArr =function () {
                    $scope.settArr = $scope.finalJSON.map(function (element) {
                        delete element.inspectorConfig;
                        return element;
                    })
                }
            }
        };
    });