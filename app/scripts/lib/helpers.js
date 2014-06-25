/*global define:true*/
'use strict';

define(
    function() {
        top.htmlEncode = function(value) {
            return $('<div/>').text(value).html();
        };

        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };

        $.ajaxPrefilter(function(options) {
            options.crossDomain = true;
            options.contentType = 'application/json';
            options.url = 'http://' + location.hostname + ':3000' + options.url;
        });

    });
