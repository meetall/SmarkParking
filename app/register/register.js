'use strict';

angular.module('myApp.register', ['ngRoute', 'ngMap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', function ($scope, NgMap, $http) {

   
      $scope.token = 42;
    $scope.getCurrentLocation = function (e) {
      $scope.selectedXLocaltion = e.latLng.lat();
      $scope.selectedYLocaltion = e.latLng.lng();
    }

    $scope.markers = [
      { address: "[51.510919,0.032450]" }
    ];

    $scope.registerParking = function () {
      $http.get('http://localhost:3000/api/register?userId=2&x=' + $scope.selectedXLocaltion + '&y=' + $scope.selectedYLocaltion)
      .then(
        function (response) {
          console.log(response.data.token);
          $scope.token = response.data.token;
        },
        function (failure) { console.log("failed :(", failure); });
    }
  
    
    
  });