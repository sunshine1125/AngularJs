var myModule = angular.module("MyModule",[]);




myModule.controller('DemoController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
	
	$scope.num = $filter('currency')(123534);

}]);





