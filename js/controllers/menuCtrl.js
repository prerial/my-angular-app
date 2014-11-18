'use strict';
app.controller('menuCtrl', ['$scope','loginService', function ($scope,loginService) {
	$scope.islogged=function(){
		return loginService.islogged();
	}
	
	$scope.logout=function(){
		loginService.logout();
	}
	
}]);