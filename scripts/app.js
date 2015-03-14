// global!
kontApp = angular.module('kontApp', ['ngRoute', 'chart.js']);

// routes
kontApp.config(['$routeProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/home', {
        path: 'home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/', {
        path: 'root',
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
