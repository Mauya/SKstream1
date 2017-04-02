angular.module('RouteControllers', [])
app.controller('headerController', ['$scope', '$location', '$route', function($scope, $location, $route) 
{ 
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    }
}]);


