angular.module('designer.module')
    .directive('inspectorComponent', function ($compile) {
        return {
            restrict: 'E',

            scope: {
                model: '=',
                propertyConfig: '='
            },

            link: function ($scope, $element) {
                $element.append($compile('<' + $scope.propertyConfig.type +"-field"+ '></' + $scope.propertyConfig.type + "-field"+'>')($scope));
            }
        };
    });