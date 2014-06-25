/*global define:true*/
'use strict';
define(['../collections/productsCollection',
     'backbone'],
    function(Products) {
        var productListView =
            Backbone.View.extend({
                el: '#rootView1',
                initialize: function() {
                },
                render: function() {
                    var self = this;
                    var products = new Products();
                    products.fetch({
                        success: function(products) {
                            var listOfProducts = _.template($('#productListView').html(), {
                                products: products.models
                            });
                            self.$el.html(listOfProducts);
                        }
                    });
                }
            })
        return productListView;
    }
);
