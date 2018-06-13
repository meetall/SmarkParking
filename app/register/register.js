'use strict';

angular.module('myApp.register', ['ngRoute', 'ngMap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', function ($scope, NgMap) {

    $scope.getCurrentLocation = function (e) {
      $scope.selectedXLocaltion = e.latLng.lat();
      $scope.selectedYLocaltion = e.latLng.lng();
    }

    $scope.markers = [
      { address: "current-location" }
    ];

  });