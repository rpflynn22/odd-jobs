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
          otherwise({
            redirectTo: '/'
          });
      }]);
}());
