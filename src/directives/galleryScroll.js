angular.module('ilenePhotoSite')
.directive('galleryScroll', function(){
  return {
    restrict: 'E',
    templateUrl: 'src/views/galleryScroll.html',
    controller: 'galleryScrollController',
    link: function(scope, element, attrs){
    }
  }
})