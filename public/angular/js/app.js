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
          when('/jobs/view', {
            templateUrl: '/views/jobs.jade',
            controller: 'JobsCtrl'
          }).
          when('/jobs/', {
            templateUrl: '/views/job-create.jade',
            controller: 'JobCreateCtrl'
          }).
          when('/jobs/:jobId', {
            templateUrl: '/views/job-detail.jade',
            controller: 'JobDetailCtrl'
          }).
          when('/register', {
            templateUrl: '/views/register.jade',
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
