'use strict';
app.factory('loginService',function($http, $location, sessionService){
	return{
		login:function(data,scope){
			// dont use it on production, please use PHP realization
			if(data.name == 'demo' && data.pass == 'demo'){
				sessionService.set('uid','some_uid_here');
				$location.path('/home');
			} else {
				scope.alerts=[
					{ type: 'danger', msg: 'Incorrect information' }
				];
			}
			/**
			realization with PHP
			*/
			/*var $promise=$http.post('data/user.php',data); //send data to user.php
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					sessionService.set('uid',uid);
					$location.path('/home');
				}	       
				else  {
					scope.alerts=[
						{ type: 'danger', msg: 'Incorrect information' }
					];
					$location.path('/login');
				}				   
			})*/;
		},
		logout:function(){
			sessionService.destroy('uid');
			$location.path('/login');
		},
		islogged:function(){
			// dont use it on production, please use PHP realization
			return (sessionService.get('uid') == 'some_uid_here')? true : false;
			/**
			realization with PHP
			*/
			/*var $checkSessionServer=$http.post('data/check_session.php');
			return $checkSessionServer;*/
		}
	}

});