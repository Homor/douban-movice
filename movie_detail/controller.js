(function(angular){

var module=angular.module('moviecat.movie_detail',
	['ngRoute',
	'moviecat.services.http'
	]
	);

module.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/detail/:id',{
templateUrl:'movie_detail/view.html',
controller:'MovieDetailController'
});
}]);

module.controller('MovieDetailController',
	[
	'$scope',
	'$route',
	'$routeParams',
	'$HttpService',
	'AppConstant',
	function($scope,$route,$routeParams,$HttpService,AppConstant){

$scope.loading=true;

$scope.movie={};
var id=$routeParams.id;

$HttpService.jsonp(
	AppConstant.DetailAddress+id,
	{},
	function(res){
				$scope.movie=res;
				$scope.loading=false;
					$scope.$apply();
    }
 );

}]);

})(angular);
