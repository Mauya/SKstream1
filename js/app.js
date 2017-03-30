var app = angular.module('bandApp', 
  ['ngRoute',
   'RouteControllers',
   'ngAnimate', 
   'ngTouch', 
   'ui.bootstrap'
  ]);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
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
    .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'musicController'
    })    
    .when("/header", {
      controller: "headerController",
      templateUrl: "templates/home.html"
    })
    .otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true);    
}]);

    

