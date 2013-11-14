'use strict';
var module = angular.module('controllers', ['services']);

module.controller('TestController1', ['$scope', 'TestService1',
    function($scope, TestService1){
        $scope.people = TestService1.get();
    }
]);

module.controller('TestController2', ['$scope', 'TestService2',
    function($scope, TestService2){

    }
]);
