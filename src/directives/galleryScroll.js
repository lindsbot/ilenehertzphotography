angular.module('ilenePhotoSite')
.directive('galleryScroll', function(Lightbox){
  return {
    restrict: 'E',
    templateUrl: 'src/views/galleryScroll.html',
    controller: 'galleryScrollController',
    link: function(scope, element, attrs){
      console.log("inside galleryScroll link ƒ")
    }
  }
})