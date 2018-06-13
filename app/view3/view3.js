'use strict';

angular.module('myApp.view3', ['ngRoute', 'ngMap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'view3Ctrl'
    });
  }])

  .controller('view3Ctrl', function ($scope, NgMap) {

    $scope.getCurrentLocation = function (e) {
      console.log(e.latLng.lat());
      console.log(e.latLng.lng());

    }

    $scope.markers = [
      { address: "[40.71, -74.21]" },
      { address: "[41.71, -72.21]" },
      { address: "[45.71, -73.21]" },
      { address: "[41.71, -78.21]" },
    ];

  });