angular.module('designer.module')
    .directive('canvasComponent', function ($compile) {
        return {
            restrict: 'E',

            link: function ($scope, $element) {
                $element.append($compile('<' + $scope.component.type + '></' + $scope.component.type + '>')($scope));
            }
        };
    });