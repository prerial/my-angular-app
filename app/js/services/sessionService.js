'use strict';
app.factory('sessionService', ['$http', function($http){
	return{
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get:function(key){
			return sessionStorage.getItem(key);
		},
		destroy:function(key){
			/**
			realization with PHP
			*/
			/*$http.post('data/destroy_session.php');*/
			
			// dont use it on production without PHP realization
			return sessionStorage.removeItem(key);
		}
	};
}])