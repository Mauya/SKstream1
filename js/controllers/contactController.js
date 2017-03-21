angular.module('RouteControllers', [])
app.controller('contactController', function($scope, $http) {
  $scope.formData = {};
  $scope.processForm = function() {
    alert('valid form!')
    $http({
      method  : 'POST',
      data    : $scope.formData
    });
  };
  var contact = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    email:"swingcrew@sc.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.contact=contact;
});
