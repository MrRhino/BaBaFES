require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'handlebars': '../bower_components/handlebars/handlebars',
        'templates': '../templates/templates',
        'hbshelpers': '../templates/helpers/helpers',
        'messages': 'lib/messages',
        'print': 'lib/print',
        'sampledata': 'app/sampledata'
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
        'templates': {
            deps: ['handlebars']
        },
        'hbshelpers': {
            deps: ['handlebars']
        }
    }
});

require(['jquery', 'messages', 'print', 'backbone', 'handlebars', 'underscore', 'sampledata', 'templates', 'hbshelpers'], function($, messages, print, Backbone, Handlebars, _, sampledata) {
    'use strict';
    /*global MyApp*/
    (function($, MyApp) {
        var ListView = Backbone.View.extend({
            el: $('body'), // attaches `this.el` to an existing element.
            initialize: function() {
                _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
                this.render(); // not all views are self-rendering. This one is.
            },
            render: function() {
                $(this.el).append('<h3>Users</h3>');
                $(this.el).append(MyApp.Templates.users(sampledata.data));
            }
        });
        new ListView();
    })($, MyApp);

    (function($, MyApp) {
        var ListView = Backbone.View.extend({
            el: $('body'), // attaches `this.el` to an existing element.
            initialize: function() {
                _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
                this.render(); // not all views are self-rendering. This one is.
            },
            render: function() {
                $(this.el).append('<h3>Customers</h3>');
                $(this.el).append(MyApp.Templates.customers(sampledata.data));
            }
        });
        new ListView();
    })($, MyApp);


 
    //$('body').append(MyApp.Templates.users(sampledata.data));
});

























