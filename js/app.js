var app = angular.module('bandApp', 
  ['ngRoute',
   'RouteControllers',
   'ngAnimate', 
   'ngTouch', 
   'ui.bootstrap',
   'mediaPlayer'
  ]);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })
    .when('/header', {      
      templateUrl: 'templates/home.html',
      controller: 'headerController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
    })
    .when('/events', {
        templateUrl: 'templates/events.html',
        controller: 'eventsController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactController'
    })
    .when('/booking', {
        templateUrl: 'templates/booking.html',
        controller: 'bookingController'
    }) 
    .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryController'
    })       
    .otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true);    
}]);

    

