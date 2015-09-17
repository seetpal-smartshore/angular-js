'use strict';

/**
 * @ngdoc function
 * @name step1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the step1App
 */
angular.module('step1App')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	this.ourLinks	=	[];
	/*
	$scope.$on('categoryAdded', function (event, args) {
		this.ourLinks.push(args.new_data);
	});
*/
  });
