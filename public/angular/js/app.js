(function () {
    'use strict';

    /* App Module */

    var oddJobs = angular.module('oddJobs', [
      'ngRoute',
      'oddJobsControllers',
    ]);

    oddJobs.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: '/views/index.jade',
            controller: 'HomeCtrl'
          }).
          when('/register', {
            templateUrl: '/views/register.jade',
            controller: 'HomeCtrl'
          }).
          when('/login', {
            templateUrl: '/views/login.jade',
            controller: 'HomeCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);
}());
