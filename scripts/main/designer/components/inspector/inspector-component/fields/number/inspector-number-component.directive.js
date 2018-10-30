angular.module('designer.module')
    .directive('numberField', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector-component/fields/number/inspector-number-component.template.html'
        };
    });
