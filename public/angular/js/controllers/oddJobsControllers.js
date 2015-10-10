(function () {
    'use strict';

   /* Controllers */

   var oddJobsControllers = angular.module('oddJobsControllers', []);

   oddJobsControllers.controller('HomeCtrl', ['$scope', '$http',
      function($scope, $http) {
         $scope.authors = ['Ryan Flynn', 'Alex McKinney', 'Steffan Voges'];
   }]);

}());
