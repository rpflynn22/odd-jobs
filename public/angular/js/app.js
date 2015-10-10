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
            templateUrl: 'views/index',
            controller: 'HomeCtrl'
          }).
          when('/jobs/view', {
            templateUrl: 'views/jobs',
            controller: 'JobsCtrl'
          }).
          when('/jobs/', {
            templateUrl: 'views/job-create',
            controller: 'JobCreateCtrl'
          }).
          when('/jobs/:jobId', {
            templateUrl: 'views/job-detail',
            controller: 'JobDetailCtrl'
          }).
          when('/register', {
            templateUrl: 'views/register',
            controller: 'HomeCtrl'
          }).
          when('/login', {
            templateUrl: '/views/login.jade',
            controller: 'LoginCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);
}());
