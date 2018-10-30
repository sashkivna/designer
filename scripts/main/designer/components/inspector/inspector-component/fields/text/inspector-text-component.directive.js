angular.module('designer.module')
    .directive('textField', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/inspector/inspector-component/fields/text/inspector-text-component.template.html'
        };
    });
