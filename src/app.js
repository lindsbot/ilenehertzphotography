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
    'web/001.jpg',
    'web/002.jpg',
    'web/003.jpg',
    'web/004.jpg',
    'web/005.jpg',
    'web/006.jpg',
    'web/007.jpg',
    'web/008.jpg',
    'web/009.jpg',
    'web/010.jpg',
    'web/011.jpg',
    'web/012.jpg',
    'web/013.jpg',
  ]    
});
