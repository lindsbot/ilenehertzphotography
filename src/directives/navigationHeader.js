angular.module('ilenePhotoSite').directive('navigationHeader', function(){
	return {
	  restrict: 'E',
	  templateUrl: 'src/views/navigationHeader.html',
	  replace: true,
	  controller: function($scope, $route, $location){
	    $scope.isActive = function(route){
	    	return route === $location.path();
	    }
	    return;
	  },
	  link: function(scope, element, attrs){
	    return;
	  }
	}
});