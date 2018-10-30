angular.module('designer.module')
    .directive('myInspector', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector.template.html',

            scope: {
                componentModel: '='
            }
        };
    });