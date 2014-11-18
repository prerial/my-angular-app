'use strict';
var app= angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/directive', {templateUrl: 'partials/directive.html', controller: 'directiveCtrl'});
  $routeProvider.when('/abouth', {templateUrl: 'partials/abouth.html', controller: 'abouthCtrl'});
  $routeProvider.when('/form', {templateUrl: 'partials/form.html', controller: 'formCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.run(['$rootScope', '$location', 'loginService', function($rootScope, $location, loginService){
	var routespermission=['/directive', '/abouth', '/form'];  //route that require login
	$rootScope.$on('$routeChangeStart', function(){
		if( routespermission.indexOf($location.path()) !=-1){
			if(!loginService.islogged()){
				alert('Please login as demo');
				$location.path('/login');
			}
		}
	});
}]);