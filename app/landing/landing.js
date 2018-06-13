'use strict';

angular.module('myApp.landing', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/landing', {
      templateUrl: 'landing/landing.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$location', '$scope', function ($location, $scope) {
    $scope.Go = function (url) {
      $location.path(url)
    }
  }]);
