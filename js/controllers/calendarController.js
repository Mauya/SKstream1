angular.module('RouteControllers', [])
app.controller("calendarController", function($scope) {
    $scope.day = moment();
});

