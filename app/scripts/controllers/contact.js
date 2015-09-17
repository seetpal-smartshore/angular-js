'use strict';

/**
 * @ngdoc function
 * @name step1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the step1App
 */
angular.module('step1App')
  .controller('contactCtrl', function ($scope) {
    this.form = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
   
	
	this.addTeamMember = function(teamMember){
	
		console.log(teamMember);
		
//		var newdata = angular.copy(teamMember);
		
		//$rootScope.$broadcast('pshit', { 'new_data': newdata });
		
//		$scope.about.ourLinks.push(newdata);
		//$scope.contactme	=	[];
		
	};
	
	
  });
