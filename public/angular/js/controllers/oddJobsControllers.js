(function () {
    'use strict';

   /* Controllers */

   var oddJobsControllers = angular.module('oddJobsControllers', []);

   oddJobsControllers.controller('MainCtrl', ['$scope', '$http',
      function($scope, $http) {

        $scope.loggedIn = false; // TODO: Remove this and replace with checkLoginStatus() once the endpoint is implemented.

        $scope.checkLoginStatus = function () {
          $http.get('/checklogin')
            .success(function(data) {
              return (data === true)
            })
            .error(function(data) {
              console.log('error: ' + data);
            });
        }
      }]);

   oddJobsControllers.controller('HomeCtrl', ['$scope', '$http',
      function($scope, $http) {
         $scope.authors = ['Ryan Flynn', 'Alex McKinney', 'Steffan Voges'];
   }]);

}());
