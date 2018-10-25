angular.module('designer.module')
    .directive('fooComponent', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/view-components/foo/foo.template.html',
        };
    });