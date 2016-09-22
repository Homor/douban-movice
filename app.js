'use strict';

// Declare app level module which depends on views, and components
 var modul=angular.module('moviecat', [
		'ngRoute',
		'moviecat.movie_detail',
		'moviecat.movie_list',
		 'moviecat.directives',
	]);
 modul.constant('AppConstant',
 	{
 		'count':10,
    'ListAddress':'http://api.douban.com/v2/movie/',
    'DetailAddress':'http://api.douban.com/v2/movie/subject/'

 	});
 modul.config(['$routeProvider',function($routeProvider){
$routeProvider.otherwise({redirectTo:'/in_theaters/1'});
 }]);
 modul.controller('SearchController',['$scope','$route',function($scope,$route){
  $scope.input='';
  $scope.search=function()
  {
    $route.updateParams({category:'search',page:1,q:$scope.input});
  }

 }]);
