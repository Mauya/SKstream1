var app = angular.module('bandApp', 
  ['ngRoute',
   'RouteControllers',
   'ngAnimate', 
   'ngTouch', 
   'ui.bootstrap'
  ]);

app.config(function ($routeProvider,$locationprovider) {
  $routeProvider
    .when("/home", {
      controller: "homeController",
      templateUrl: "templates/home.html"
    })
    .when("/about", {
      controller: "aboutController",
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

    $locationprovider.html5Mode(true);
    .otherwise({
      redirectTo: '/'
    });
});
