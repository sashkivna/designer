angular.module('designer.module')
    .directive('textField', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector-component/Fields/Text/inspector-text-component.template.html'
        };
    });
