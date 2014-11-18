'use strict';
app.controller('homeCtrl', ['$scope','loginService','avengersService','$modal','$log', '$location', function($scope,loginService,avengersService,$modal, $log, $location){

	$scope.search = '';
	
	$scope.filterOnNameOrChar = function(actor) {
		return (actor.Name + actor.Character).indexOf($scope.search) >= 0;
	};

	this.getUniqueKeys = function(arr) {
		var key, keys = [];
		var L = arr.length;
		for (var i = 0; i < L; i++) {
			var obj = arr[i];
			for (var j in obj) {
				if (keys.indexOf(j) < 0) {
					keys.push(j);
				}
			}
		}

		return keys;
	}
	
    $scope.avengers = avengersService;

    $scope.castKeys = this.getUniqueKeys($scope.avengers.cast);

    $scope.totalKeys = $scope.castKeys.length;
	
	$scope.dialog = function(actor){
	
		if(loginService.islogged()){
			var modalInstance = $modal.open({
				templateUrl: 'partials/dialogContent.html',
				controller: 'dialogCtrl',
				size: 'lg',
				resolve: {
					actor: function () {
						return actor;
					}
				}
			});

			modalInstance.result.then(function (val) {
				$log.info('Modal return img link: ' + val);
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		}else{
			alert('Please login as demo');
			$location.path('/login');
		}
	}
}])