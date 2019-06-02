var mywebapp=angular.module("app",[]);
myapp.controller("mycontroller", function($scope,$interval){
	$interval(function(){
		$scope.time=new Date().toLocaleTimeString();
	}, 1000); 
});