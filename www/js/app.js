'use strict';

var almundoApp = angular.module('almundoApp', ['ngRoute', 'ui.bootstrap']);
hotelApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/hotel.html',
      controller: 'HotelCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

  hotelApp.controller('HotelCtrl', ['$scope', '$rootScope', 'HotelService', function($scope, $rootScope, HotelService) {
  $scope.formData = {};
  $scope.todos = [];

  HotelService.getTodos().then(function(response) {
    $scope.todos = response;
  });

  $scope.addTodo = function() {
    HotelService.addTodo($scope.formData).then(function(response) {
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.removeTodo = function(todo) {
    HotelService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    });
  }
}]);