'use strict';

angular.module('myApp.find', ['ngRoute', 'ngMap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/find', {
      templateUrl: 'find/find.html',
      controller: 'findCtrl'
    });
  }])

  .controller('findCtrl', function ($scope, NgMap) {

    $scope.getCurrentLocation = function (e) {
      console.log(e.latLng.lat());
      console.log(e.latLng.lng());

    }

    $scope.markers = [
      { address: "[51.510997,0.032628]" },
      { address: "[51.511008,0.032817]" },
      { address: "[51.510919,0.032450]" },
    ];

  });