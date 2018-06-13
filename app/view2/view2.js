'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngMap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ['$scope', 'ngMap', function ($scope, NgMap) {

    $scope.test = function () {
      // send the coordinate to api
      console.log($scope.markers[0].getPosition());
    }

    $scope.markers = [
      { address: "[40.71, -74.21]" },
      { address: "[40.72, -74.20]" },
    ];
    NgMap.getMap().then(function (map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }]);