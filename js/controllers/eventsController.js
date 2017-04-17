angular.module('RouteControllers', [])
app.controller('eventsController', ['$scope', function($scope) {
  $scope.events = [ 
	  { 
	    image: 'images/events/wedding1.jpg',	    
	    title: 'Wedding Reception',  
	    button:  'Book Now' 
	  }, 
	  { 
	    image: 'images/events/corporate1.jpg',	     
	    title: 'Corporate Events', 
	    button:  'Book Now' 
	  },
	  {
	    image: 'images/events/social1.jpg',	    
	    title: 'Socials Festivals',  
	    button:  'Book Now' 
	  },
	  {
	   image: 'images/events/tour1.jpg',	    
	    title: 'Tours',  
	    button:  'Book now' 
	  }
	];

	$scope.reviewtitle = 'What Our Fans are Saying!';    
    $scope.myInterval = 3000;
    $scope.slides= [
      {
        review: "The band is the best, I was so satisfied with our wedding reception!",
        fan: "Will Stone"
      },
      {
        review: "Amazing staging and awesome Music!",
        fan: "Peter Roberts"
      },
      {
        review: "Wow ...you have to experience the Swing Crew to say wow!",
        fan: "Jackie Todd"

      }
    ];
}]);


// app.controller('eventsController', ['$scope', function($scope) {
//   $scope.events = [ 
// 	  { 
// 	    service: 'Live Music', 
// 	    event: 'Weddings', 
// 	    title: 'Big day', 
// 	    price: 0.99 
// 	  }, 
// 	  { 
// 	    service: 'staging intertainment', 
// 	    title: 'Corporate events', 
// 	    title: 'Chico Dusty', 
// 	    price: 2.99 
// 	  },
// 	  {
// 	    service: 'Social festivals',
// 	    title: 'Social events',
// 	    developer: 'Armando P.',
// 	    price: 1.99
// 	  },
// 	  {
// 	    service: 'Band Touring',
// 	    title: 'Tours',
// 	    developer: 'Forecast',
// 	    price: 1.99
// 	  }
// 	];
// }]);