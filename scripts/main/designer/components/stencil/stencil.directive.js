angular.module('designer.module')
    .directive('myStencil', function () {
        return {
            restrict: 'E',
            templateUrl: 'main/designer/components/stencil/stencil.template.html',

            scope: {
                components: '=',
                onSelect: '&',
            },

            link: function ($scope) {
                $scope.selectedComponent = null;

                $scope.addSelectedComponent = function () {
                    //console.log($scope.selectedComponent);

                    $scope.onSelect({component: $scope.selectedComponent});
                };

                $scope.selectComponent = function (component) {
                    $scope.selectedComponent = component;
                };

                $scope.isComponentSelected = function (component) {
                    return component === $scope.selectedComponent;
                };
            }
        };
    });