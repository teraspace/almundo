'use strict';

var almundoApp = angular.module('almundoApp', ['ngMaterial','ngRoute', 'ui.bootstrap']);


console.log('app')


almundoApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/index.html',
      controller: 'HotelCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
