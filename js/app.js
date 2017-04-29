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
    .when('.', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })
    .when('about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
    })
    .when('about/:memID', {
        templateUrl: 'templates/aboutProfile.html',
        controller: 'aboutProfileController'
    })
    .when('events', {
        templateUrl: 'templates/events.html',
        controller: 'eventsController'
    })
    .when('pricing', {
        templateUrl: 'templates/pricing.html',
        controller: 'pricingController'
    })
    .when('booking', {
        templateUrl: 'templates/booking.html',
        controller: 'bookingController'
    })
    .when('gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryController'
    })  
    .when('audio', {
        templateUrl: 'templates/audio.html',
        controller: 'audioController'
    })
    .when('video', {
        templateUrl: 'templates/video.html',
        controller: 'videoController'
    })
    .when('photo', {
        templateUrl: 'templates/photo.html',
        controller: 'photoController'
    })  
    .when('contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactController'
    })      
    .otherwise({
        redirectTo: '.'
    })
    $locationProvider.html5Mode(true);    
}]);

    

