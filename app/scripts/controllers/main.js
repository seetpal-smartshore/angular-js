'use strict';

/**
 * @ngdoc function
 * @name step1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the step1App
 */
angular.module('step1App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	/*
	$rootScope.$on("$locationChangeStart",function(event, next, current){
		//do your validations here
		//prevent the location change.
		console.log('locationChangeStart');
//		event.preventDefault();
	});
	*/
  });
