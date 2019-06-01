var myapp=angular.module("ar",[]);
myapp.controller("mycontroller",  function($scope){
	$scope.colors=['red','green','blue','violet'];
	   $scope.persons = [{ name: 'John', phone: '512-455-1276' },
                         { name: 'Mary', phone: '899-333-3345' },
                         { name: 'Mike', phone: '511-444-4321' },
                         { name: 'Bill', phone: '145-788-5678' },
                         { name: 'Ram', phone: '433-444-8765' },
                         { name: 'Steve', phone: '218-345-5678' }]
                          $scope.SortOrder = '+name'
	
});
