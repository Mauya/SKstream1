angular.module('RouteControllers', [])
app.controller('contactController', function($scope){
$scope.contacts =[
 {
  department:"General inquires",
  address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
  name: "Reception",
  email:"general@swingcrew.ie",
  telephone: "xx xxx xxxx"
  },
  {
  department:"Management",
  address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
  name:"Tracy Mucha",
	email:"info@swingcrew.ie",
	telephone: "xx xxx xxxx"
  },
  {
  department:"Booking",
  address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
  name:"Brookyln Jones",
	email:"booking@swingcrew.ie",
	telephone: "xx xxx xxxx"
  },
  {
  department:"Public Relations",
  address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
  name:"Savanna Shaw",
	email:"pr@swingcrew.ie",
	telephone: "xx xxx xxxx"
  }
]});
