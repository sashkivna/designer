angular.module('designer.module')
    .directive('inspectorComponent', function ($compile) {
        return {
            restrict: 'E',

            scope: {
                model: '=',
                propertyConfig: '='
            },

            link: function ($scope, $element) {
                $element.append($compile('<input ng-model="model[propertyConfig.name]" type="' + $scope.propertyConfig.type + '"/>')($scope));
            }
        };
    });