/*global define:true*/
'use strict';
define(['backbone'],function() {
    var product = Backbone.Model.extend({
        urlRoot: '/products'
    });
    return product;
});
