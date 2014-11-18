'use strict';
app.controller('dialogCtrl', ['$scope', '$modalInstance', 'actor', function($scope, $modalInstance, actor){
	$scope.dialog = {}
	$scope.dialog.name = actor.Name;
	$scope.dialog.character = actor.Character;
	$scope.dialog.image = 'img/'+actor.Index+'.jpg';
	
	$scope.ok = function () {
		$modalInstance.close($scope.dialog.image);
	};
}])