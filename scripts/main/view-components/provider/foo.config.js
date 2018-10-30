angular.module('app.module')
    .config(function (registerComponentsProvider, FOO_COMPONENT) {
        registerComponentsProvider.registerComponent(FOO_COMPONENT);
    });