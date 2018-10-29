angular.module('designer.module')
    .directive('numberField', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector-component/Fields/Number/inspector-number-component.template.html'
        };
    });
