var app = angular.module('bandApp', 
  ['ngRoute',
   'RouteControllers',
   'ngAnimate', 
   'ngTouch', 
   'ui.bootstrap',
   'mediaPlayer'
  ]);

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
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
    .when('/booking', {
        templateUrl: 'templates/booking.html',
        controller: 'bookingController'
    })  
    // .when('/music', {
    //     templateUrl: 'templates/music.html',
    //     controller: 'musicController'
    // })
    // .when('/video', {
    //     templateUrl: 'templates/video.html',
    //     controller: 'videoController'
    // })
    // .when('/photo', {
    //     templateUrl: 'templates/photo.html',
    //     controller: 'photoController'
    // })  
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactController'
    })      
    .otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true);    
}]);

    

