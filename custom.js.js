
var mymodule=angular.module("js",[]);
mymodule.controller("mycontroller",  function($scope){
	$scope.name="koushik";
	$scope.city="kolkata";
	$scope.detail=function(){
		return "this is function variable: "+$scope.name+$scope.city;
	};
	
});

