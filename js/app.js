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
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactController'
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

    

