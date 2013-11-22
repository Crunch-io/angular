
module.exports.start = function(){
    'use strict';
    var ng = require('angular');

    var mod = ng.module('componentized',['ngSanitize']);
    mod.controller('index',function($scope){
        $scope.componentized = 'Yes! I am componentized!';
        $scope.sanitizable = '<span>Here is a span</span>';
    });

};

