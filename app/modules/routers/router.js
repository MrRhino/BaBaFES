/*global define:true*/
'use strict';
define(['backbone'],
	function() {
    var router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'edit/:id': 'edit',
            'new': 'edit'
        }
    });
    return router;
});
