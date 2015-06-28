var app = angular.module('ilenePhotoSite', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'src/views/home.html'
    })
    .when('/about', {
      templateUrl: 'src/views/about.html'
    })
    .when('/gallery', {
      templateUrl: 'src/views/gallery.html'
    })
    .when('/technique', {
      templateUrl: 'src/views/technique.html'
    })
    .when('/blog', {
      templateUrl: 'src/views/blog.html'
    })
    .when('/contact', {
      templateUrl: 'src/views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('SiteController', function($scope){
  $scope.imageCollection = [
    'img/web_001.jpg',
    'img/web_002.jpg',
    'img/web_003.jpg',
    'img/web_004.jpg',
    'img/web_005.jpg',
    'img/web_006.jpg',
    'img/web_007.jpg',
    'img/web_008.jpg',
    'img/web_009.jpg',
    'img/web_010.jpg',
    'img/web_011.jpg',
    'img/web_012.jpg',
    'img/web_013.jpg',
    'img/web_014.jpg'
  ]    
});
