angular.module('designer.module')
    .constant('FOO_COMPONENT', {
        descriptor: {
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
        }
    });