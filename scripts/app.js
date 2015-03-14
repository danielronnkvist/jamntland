// global!
kontApp = angular.module('kontApp', ['ngRoute', 'chart.js']);

// routes
kontApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
])
