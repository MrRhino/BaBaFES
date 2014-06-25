require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'helpers': 'lib/helpers',
        'ctlr': '../modules/singletons/pagecontroller'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'ctlr': {
            exports: 'ctlr'
        },
        'templates': {
            deps: ['handlebars']
        },
        'helpers': {
            deps: ['jquery']
        },
        'hbshelpers': {
            deps: ['handlebars']
        }
    }
});

require(['jquery',
        'ctlr',
        'helpers',
        'backbone',
        'underscore'
    ],
    function($, ctlr) {
        'use strict';
        ctlr.init();
    });
