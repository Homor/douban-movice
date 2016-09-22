(function(angular){
angular.module('moviecat.directives',[])
.directive('autoFocus',['$location',function($location){
	var path=$location.path();
		return{
	 restrict:'A',
		link: function($scope, iElm, iAttrs, controller) {

					$scope.$location = $location;
					$scope.$watch('$location.path()', function(now) {
						// 当path发生变化时执行，now是变化后的值    /coming_soon/2
						var aLink = iElm.children().attr('href');  //#in_theaters/1

						var type = aLink.replace(/#(.+?)\/\d+/, '$1'); // coming_soon
							type='/'+type;                            // /coming_soon

						if (now.startsWith(type)) {

							// 访问的是当前链接
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
						}
					})
				}
			};
		}])

})(angular)
