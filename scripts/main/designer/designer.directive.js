angular.module('designer.module')
    .directive('myDesigner', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/designer.template.html',

            link: function ($scope, element, attrs, controller) {

            }
        };
    });
