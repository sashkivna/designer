angular.module('designer.module')
    .directive('myInspector', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector.template.html',

            scope: {
                component: '=',
            },

            link: function ($scope) {
                $scope.$watch('component', function (component) {
                });
            }
        };
    });