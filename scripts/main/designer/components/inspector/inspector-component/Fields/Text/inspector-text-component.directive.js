angular.module('designer.module')
    .directive('textField', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector-component/Fields/Text/inspector-text-component.template.html',
            link: function ($scope) {
                $scope.showConfigArr = function () {
                    $scope.finalJSON = [];
                    debugger;
                    if ($scope.$root.definitions.components.length > 0) {
                        for (var i = 0; i < $scope.$root.definitions.components.length; i++) {
                            if ($scope.$root.definitions.components[i].inspectorConfig.length !== 1) {
                                for (var j = 0; j < $scope.$root.definitions.components[i].inspectorConfig.length; j++) {
                                    for (var key in $scope.$root.definitions.components[i].inspectorConfig[j]){
                                        if (key === "description") {
                                            var description = $scope.$root.definitions.components[i].inspectorConfig[j][key];
                                        }
                                    }
                                }
                            }

                            $scope.finalJSON.push({
                                _name: $scope.$root.definitions.components[i]._name,
                                _type: $scope.$root.definitions.components[i]._type,
                                label: $scope.$root.definitions.components[i].label,
                                description: description
                            });
                        }
                    }
                }
            }
        };
    });
