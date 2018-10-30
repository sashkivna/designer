angular.module('designer.module')
    .constant('FOO_COMPONENT', {
            componentName: 'foo',
            type: 'foo-component',
            properties: [
                {
                    name: 'label',
                    type: 'text'
                },
                {
                    name: 'description',
                    type: 'number'
                }
            ]
    });