angular.module('app.module')
    .provider('registerComponents', function () {
        var registeredComponents = [];

        this.registerComponent = function (value) {
            registeredComponents.push(value);
        };

        this.$get = function () {
            return {
                getRegisteredComponents: function () {
                    return registeredComponents;
                }
            }
        }
    });