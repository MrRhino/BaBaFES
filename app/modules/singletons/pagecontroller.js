/*global define:true*/
'use strict';
define(['../../modules/views/productListView',
        '../../modules/views/productEditView',
        '../../modules/models/productModel',
        '../../modules/collections/productsCollection',
        '../../modules/routers/router'
    ],
    function(_productListView, _productEditView, _productModel, _productsCollection, _router) {
        var ctlr = {
            init: function() {

                var router = new _router();

                var product = new _productModel();
                var products = new _productsCollection();

                var productListView = new _productListView();
                var productEditView = new _productEditView(router, product);

                router.on('route:home', function() {
                    productListView.render();
                });
                router.on('route:edit', function(id) {
                    id = id? escape(id) : id; 
                    productEditView.render({
                        id: id
                    });
                });

                Backbone.history.start();
            }
        };
        return ctlr;
    });