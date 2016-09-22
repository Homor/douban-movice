(function(angular){

var module=angular.module('moviecat.movie_list',
	['ngRoute',
	'moviecat.services.http'
	]
	);

module.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/:category/:page',{
templateUrl:'movie_list/view.html',
controller:'MovieListController'
});
}]);

module.controller('MovieListController',
	[
	'$scope',
	'$route',
	'$routeParams',
	'$HttpService',
	'AppConstant',
	function($scope,$route,$routeParams,$HttpService,AppConstant){

		$scope.page=parseInt($routeParams.page);
		var count=AppConstant.count;
		var start=($scope.page-1)*count;
		$scope.pageCount=0;
$scope.loading='true';
$scope.subjects='';
$scope.message='';
$scope.totalCount=0;
$scope.title='';

 $scope.go=function(topage){
 	if(topage<1||topage>$scope.pageCount)
 		{return;}
  $route.updateParams({page:topage});

 }
$HttpService.jsonp(
	AppConstant.ListAddress+$routeParams.category,
	{count:10,start:start,q:$routeParams.q},
	function(res){
					$scope.subjects=res.subjects;
					$scope.totalCount=res.total;
      $scope.loading=false;
      $scope.title=res.title;
  $scope.pageCount=Math.ceil(res.total/count);
		$scope.$apply();
    }
 );

}]);

})(angular);
