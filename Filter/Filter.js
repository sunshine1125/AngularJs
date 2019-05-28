var myModule = angular.module("MyModule", []);



myModule.controller('SortByTableController', ['$scope', function($scope) {
	$scope.friends =
		[{
			name: 'John',
			phone: '555-1212',
			age: 10
		}, {
			name: 'Mary',
			phone: '555-9876',
			age: 19
		}, {
			name: 'Mike',
			phone: '555-4321',
			age: 21
		}, {
			name: 'Adam',
			phone: '555-5678',
			age: 35
		}, {
			name: 'Julie',
			phone: '555-8765',
			age: 29
		}];
	$scope.predicate = '-age';
}]);

myModule.controller('BabyController', ['$scope', '$http', function($scope, $http) {

	$http.get('data.json').success(function(data) {
		$scope.babies = data;
	})

}]);

/*
	filters
 */

myModule
// 字符串首字母大写
	.filter('capitalize', function() {
		return function(input) {
			// input will be the string we pass in
			if (input) {
				return input[0].toUpperCase() + input.slice(1);
			}
		}
	})
	// 负数返回空
	.filter('blankIfNegative', function() {
		return function(input) {
			if (input <= 0) return ' ';
			else return input;
		}
	});