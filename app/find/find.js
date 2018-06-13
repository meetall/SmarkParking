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
      { address: "[51.512000,0.032628]" },
      { address: "[51.511008,0.033100]" },
      { address: "[51.510919,0.031000]" },
      { address: "[51.511919,0.031500]" },
      { address: "[51.511519,0.032000]" },
    ];

  });