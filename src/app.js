var app = angular.module('ilenePhotoSite', ['ngRoute', 'bootstrapLightbox']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'src/views/home.html'
    })
    .when('/about', {
      templateUrl: 'src/views/about.html'
    })
    .when('/portfolio', {
      templateUrl: 'src/views/portfolio.html'
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
  return;
});
