angular.module('RouteControllers', [])
app.controller('contactController', function($scope){
$scope.contact1 = "General inquires";
  var general = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    name: "Reception",
    email:"general@swingcrew.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.general=general;

$scope.contact2 = "Management";
  var management = {
  	name:"Tracy Mucha",
	email:"info@swingcrew.ie",
	telephone: "xx xxx xxxx"
  };
  $scope.management = management

$scope.contact3 = "Booking";
  var booking = {
  name:"Brookyln Jones",
	email:"booking@swingcrew.ie",
	telephone: "xx xxx xxxx"
  };
  $scope.booking = booking

$scope.contact4 = "Public Relations";
  var pr = {
  name:"Savanna Shaw",
	email:"pr@swingcrew.ie",
	telephone: "xx xxx xxxx"
  };
  $scope.pr = pr
});
