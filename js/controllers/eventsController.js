app.controller('eventsController', ['$scope', function($scope) {
  $scope.events = [ 
	  { 
	    image: 'images/events/wedding1.jpg',	    
	    title: 'Wedding Reception',  
	    button:  'Book Now' 
	  }, 
	  { 
	    image: 'images/events/corporate1.jpg',	     
	    title: 'Corporate Galas', 
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
    $scope.myInterval = 5000;
    $scope.reviews= [
      { 
      	id: '0',
        review: "The band is the best, I was so satisfied with our wedding reception!",
        fan: "Will Stone"
      },
      {
      	id: '1',
        review: "Amazing staging and awesome Music!",
        fan: "Peter Roberts"
      },
      {
      	id: '2',
        review: "Wow ...you have to experience the Swing Crew to say wow!",
        fan: "Jackie Todd"

      },
      {
      	id: '3',
        review: "Amazing lighting and sound out of the charts!",
        fan: "George Martin"
      },
      {
      	id: '4',
        review: "Engaging band members, What a talent",
        fan: "Anna Bush"
      },
      {
      	id: '5',
        review: "Great reception and positive vibs",
        fan: "Hunter Mooja"
      }
    ];
}]);


