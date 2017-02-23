var app = angular.module('bandApp', 
  ['ngRoute',
   'RouteControllers',
   'ngAnimate', 
   'ngTouch', 
   'ui.bootstrap'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "homeController",
      templateUrl: "templates/home.html"
    })
    .when("/about", {
      controller: "AboutController",
        templateUrl: "templates/about.html"     
    })    
    // .when('/photos/:id', {
    //   controller: "PhotoController",
    //   templateUrl: "templates/photo.html"
    // })
    .when("/header", {
      controller: "headerController",
      templateUrl: "templates/home.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});
