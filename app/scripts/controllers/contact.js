'use strict';

/**
 * @ngdoc function
 * @name step1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the step1App
 */
angular.module('step1App')
  .controller('contactCtrl', ['$scope', function ($scope) {
  
	this.addTeamMember = function(contactme){
	
		//var contactme	=	angular.toJson(contactme);
	
//		bar newdata = angular.copy(teamMember);
//		console.log(data);
//		$scope.$parent.ourLinks.push(data);
//		this.ourLinks.push(data);

		$scope.$parent.ourLinks.push(contactme);
		$scope.contactme	=	{};
	};

  }]);
