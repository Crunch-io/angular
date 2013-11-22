
module.exports.start = function(){
    'use strict';
    window.jQuery = require('jquery')
    var ng = require('angular');

    var mod = ng.module('componentized',['ngSanitize']);
    mod.controller('index',function($scope){
        $scope.componentized = 'Yes! I am componentized!';
        $scope.sanitizable = '<span>Here is a span</span>';
    });
    mod.directive('simple',function(){
        return function(el,scope,attrs) {
            return ng.element('body').css('background','red');

        };

    });

};

