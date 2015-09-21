'use strict';

/**
 * @ngdoc function
 * @name step1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the step1App
 */
angular.module('step1App')
	.directive('activeLink', ['$location', function (location) {
		return {
		  restrict: 'A',
		  link: function(scope, element, attrs) {
			var clazz = attrs.activeLink;
			var path = element.children('a').attr('href');
			path = path.substring(1); //hack because path does not return including hashbang
			scope.location = location;
			scope.$watch('location.path()', function (newPath) {
			  if (path === newPath) {
				element.addClass(clazz);
				return false;
			  } else {
				element.removeClass(clazz);
			  }
			});
		  }
		};
	}]);