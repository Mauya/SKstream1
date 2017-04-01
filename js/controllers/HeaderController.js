var app = angular.module("bandApp", []);
app.controller('headerController', ['$scope', '$location', function($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
}]);