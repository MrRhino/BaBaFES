/*global define:true*/
'use strict';
define(['backbone'],
	function() {
    var products = Backbone.Collection.extend({
        url: '/products'
    });
    return products;
});
