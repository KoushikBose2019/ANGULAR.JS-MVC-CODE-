var myapp=angular.module("ft",[]);
myapp.controller("mynewController", function($scope){
	$scope.name="tony";
	$scope.country="india";

});
myapp.run(function($rootScope){
	  $rootScope.name="hello outer with rootscope";
	  $rootScope.maths=function(){
	  	return $rootScope.name+"this variable is calling with the help of function";

	  };
});

