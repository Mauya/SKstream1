var app = angular.module('bandApp', 
  ['ngRoute',
   'RouteControllers',
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "templates/home.html"
    })
    // .when('/photos/:id', {
    //   controller: "PhotoController",
    //   templateUrl: "templates/photo.html"
    // })
    .when('/header', {
      controller: "HeaderController",
      templateUrl: "templates/home.html"
    })
    // .otherwise({
    //   redirectTo: '/'
    // });
});
