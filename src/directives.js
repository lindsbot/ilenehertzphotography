var ilenePhotoSite = angular.module('ilenePhotoSite');

ilenePhotoSite.directive('galleryScroll', function(){
  return {
    restrict: 'E',
    template: '<div class="gallery-container"> \
                <img src="img/web_001.jpg"> \
              </div>',
    controller: function($scope, $element, $attrs){
      console.log('inside galleryScroll controller');
    },
    link: function(scope, element, attrs){
      console.log('inside galleryScroll link function');
    }
  }
});
