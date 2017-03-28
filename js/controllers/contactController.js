angular.module('RouteControllers', [])
app.controller('contactController', function($scope){
$scope.contacts =[
 {
  department:"General inquires",
  email:"general@swingcrew.ie",
  telephone: "xx xxx xxxx"
  },
  {
  department:"Management",
	email:"info@swingcrew.ie",
	telephone: "xx xxx xxxx"
  },
  {
  department:"Booking",
	email:"booking@swingcrew.ie",
	telephone: "xx xxx xxxx"
  },
  {
  department:"Public Relations",
	email:"pr@swingcrew.ie",
	telephone: "xx xxx xxxx"
  }
]});
