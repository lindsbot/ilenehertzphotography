var ilenePhotoSite = angular.module('ilenePhotoSite');

ilenePhotoSite.directive('navigationHeader', function(){
  return {
    restrict: 'E',
    template: '<div class="navigation-header-container"> \
                <div class="header-name">Ilene Hertz Photography</div> \
                <navigation-links></navigation-links> \
              </div>',
    controller: function($scope, $element, $attrs){
      console.log('inside navigationHeader controller');
    },
    link: function(scope, element, attrs){
      console.log('inside navigationHeader link function');
    }
  }
});

ilenePhotoSite.directive('navigationLinks', function(){
  return {
    restrict: 'E',
    template: '<div> \
                <ul class="nav-links"> \
                  <li>Home</li> \
                  <li>About</li> \
                  <li>Technique</li> \
                  <li>Blog</li> \
                  <li>Contact</li> \
                </ul> \
              </div>',
    controller: function($scope, $element, $attrs){
      console.log('inside navigationLinks controller');
    },
    link: function(scope, element, attrs){
      console.log('inside navigationLinks link function');
    }
  }
});

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

ilenePhotoSite.directive('footerSocialLinks', function(){
  return {
    restrict: 'E',
    template: '<div class="social-links"> \
                <div>Connect with me</div> \
                <ul> \
                  <li class="entypo social-500px"></li> \
                  <li class="entypo social-flickr"></li> \
                  <li class="entypo social-twitter"></li> \
                </ul> \
              </div>',
    controller: function($scope, $element, $attrs){
      console.log('inside footerSocialLinks controller');
    },
    link: function(scope, element, attrs){
      console.log('inside footerSocialLinks link function');
    }
  }
});