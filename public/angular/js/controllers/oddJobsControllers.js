(function () {
    'use strict';

   /* Controllers */

   var oddJobsControllers = angular.module('oddJobsControllers', []);

   oddJobsControllers.controller('MainCtrl', ['$scope', '$http',
      function($scope, $http) {
        $scope.test = false;
  }]);

   oddJobsControllers.controller('HomeCtrl', ['$scope', '$http',
      function($scope, $http) {
         $scope.authors = ['Ryan Flynn', 'Alex McKinney', 'Steffan Voges'];
   }]);

   oddJobsControllers.controller('JobsCtrl', ['$scope', '$http',
      function($scope, $http) {
        $http.get('/jobs/view')
          .success(function(data) {
            $scope.jobs = data;
          })
          .error(function(data) {
            console.log('error: ' + data);
          });
    }]);

    oddJobsControllers.controller('JobDetailCtrl', ['$scope', '$http', '$routeParams',
      function($scope, $http, $routeParams) {
        var jobUrl = '/jobs/' + $routeParams.jobId;
        $http.get(jobUrl)
          .success(function(data) {
            $scope.job = data;
          })
          .error(function(data) {
            console.log('error: ' + data);
          });
    }]);

    oddJobsControllers.controller('JobsCreateCtrl', ['$scope', '$http',
      function($scope, $http) {
        $scope.title = '';
    }]);

}());
