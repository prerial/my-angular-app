'use strict';
app.controller('formCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.myForm = {};
	if (localStorage.getItem('myForm') !== null){
		$scope.myForm = JSON.parse(localStorage.getItem('myForm'));
	}

	$scope.cars = [
              { id : "nissan", name: "Nissan" }
             ,{ id : "toyota", name: "Toyota" }
             ,{ id : "fiat"  , name: "Fiat" }
             ];
			 
	$scope.countries = [{
                    id: "0",
                    name: "Ukraine"
                  },{
                    id: "1",
                    name: "United State"
                  },{
                    id: "2",
                    name: "Canada"
                  }];
				  
	$scope.backupRegions =  [[{  
							id: "1",
							name: "Kyiv"
                        },{
							id: "2",
							name: "Lviv"
                        },{
							id: "3",
							name: "Odesa"
                        },{
							id: "4",
							name: "Donetsk"
                        }],
					    [{  
							id: "1",
							name: "Alabama"
                        },{
							id: "2",
                            name: "Alaska"
                        },{  
							id: "3",
							name: "Arizona"
                        },{ 
							id: "4",
							name: "California"
                        }],
						[{  
							id: "201",
							name: "Alberta"
                        },{
							id: "202",
							name: "British Columbia"
                        },{
							id: "303",
							name: "Manitoba"
                        },{
							id: "304",
							name: "Ontario"
                        }]];
						
	$scope.getRegions=function(){
        return $scope.backupRegions[$scope.myForm.country];
    }
						
	
	$scope.save = function(){
		localStorage.setItem('myForm', JSON.stringify($scope.myForm));
		alert("Saved to local storage data: \n" + JSON.stringify($scope.myForm));
		// submit example
		//$http.post('data/form.php',$scope.myForm); //send form data to form.php
	};
	
	$scope.reset = function(){
		$scope.myForm = {};
		localStorage.removeItem('myForm');
	}
}]);