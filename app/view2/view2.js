'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngMap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', function ($scope, NgMap) {

    $scope.getCurrentLocation = function (e) {
      console.log(e.latLng.lat());
      console.log(e.latLng.lng());

    }

    $scope.markers = [
      { address: "[40.71, -74.21]" }
    ];

  });