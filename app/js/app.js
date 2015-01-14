'use strict';

/* App Module */

var myApp = angular.module('myApp', [
'ngRoute',
'myAppControllers'
]);


myApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html'
  }).
  when('/about', {
    templateUrl: 'partials/about.html'
  }).
  when('/contact', {
    templateUrl: 'partials/contact.html'
  }).
  when('/login', {
    templateUrl: 'partials/login.html'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
