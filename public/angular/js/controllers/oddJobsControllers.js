(function () {
    'use strict';

   /* Controllers */

   var oddJobsControllers = angular.module('oddJobsControllers', []);

   oddJobsControllers.controller('MainCtrl', ['$scope', '$http',
      function($scope, $http) {

        // TODO: Remove this and replace with checkLoginStatus() once the endpoint is implemented.
        $scope.loggedIn = false;

        $scope.checkLoginStatus = function () {
          $http.get('/checklogin')
            .success(function(data) {
              return (data === true)
            })
            .error(function(data) {
              console.log('error: ' + data);
            });
        };
  }]);

   oddJobsControllers.controller('HomeCtrl', ['$scope', '$http',
      function($scope, $http) {
         $scope.authors = ['Ryan Flynn', 'Alex McKinney', 'Steffan Voges'];
   }]);

   oddJobsControllers.controller('JobsCtrl', ['$scope', '$http',
      function($scope, $http) {
        $http.get('/jobs')
          .success(function(data) {
            $scope.jobs = data;
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
