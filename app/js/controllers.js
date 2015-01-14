'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.navLinks = [{
    Title: 'home',
    LinkText: 'Home',
  }, {
    Title: 'about',
    LinkText: 'About Us'
  }, {
    Title: 'contact',
    LinkText: 'Contact Us'
  }, {
    Title: 'login',
    LinkText: 'Login'
  }];

  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

}]);
