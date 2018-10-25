angular.module('designer.module')
    .directive('fooComponent', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/view-components/type/type.template.html',
        };
    });
