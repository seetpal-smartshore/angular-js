'use strict';

/**
 * @ngdoc function
 * @name step1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the step1App
 */
angular.module('step1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	/*
	$scope.$on('categoryAdded', function (event, args) {
		this.ourLinks.push(args.new_data);
	});
*/
  });
