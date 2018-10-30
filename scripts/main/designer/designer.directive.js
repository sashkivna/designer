angular.module('designer.module')
    .directive('myDesigner', function (FOO_COMPONENT) {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/designer.template.html',

            link: function ($scope) {
                var fooComponentDescription = FOO_COMPONENT.descriptor;

                var allComponents = [fooComponentDescription];

                $scope.stencilComponents = [
                    {
                        componentName: fooComponentDescription.componentName
                    }
                ];

                $scope.canvasComponentModels = [];
                $scope.finalJSON = [];
                $scope.inspectorComponent = null;

                $scope.addComponentToCanvas = function (selectedComponent) {
                    var componentDescriptor = allComponents.find(function (component) {
                        return component.componentName === selectedComponent.componentName;
                    });

                    var componentModel = {
                        _name: componentDescriptor.componentName,
                        _type: componentDescriptor.type,
                        inspectorConfig: componentDescriptor.properties,
                        inspectorData: {}
                    };

                    $scope.canvasComponentModels.push(componentModel);
                };

                $scope.selectCanvasComponent = function (componentModel) {
                    $scope.inspectorComponent = componentModel;
                };

                $scope.showFinalConfigArr = function () {
                    $scope.JSON = [];

                    $scope.canvasComponentModels.forEach(function (model) {
                        var obj = {
                            name: model._name,
                            type: model._type,
                        };

                        for (var key in model.inspectorData) {
                            obj[key] = model.inspectorData[key];
                        }

                        $scope.JSON.push(obj);
                    })
                }
            }
        };
    });