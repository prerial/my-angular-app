'use strict';
app.controller('loginCtrl', ['$scope','loginService', function ($scope,loginService) {
	$scope.alerts = [];
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
  
	$scope.login=function(data){
		loginService.login(data,$scope); //call login service
	};
}]);