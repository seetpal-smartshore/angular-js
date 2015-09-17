'use strict';

/**
 * @ngdoc overview
 * @name step1App
 * @description
 * # step1App
 *
 * Main module of the application.
 */
angular
  .module('step1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
	  
	   /*
    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
    $locationProvider.hashPrefix('!');*/
  });
