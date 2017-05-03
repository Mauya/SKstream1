app.controller('pricingController', function($scope) {
	$scope.pricingTitle = "Our Price Packages" 
  	$scope.packages = [ 
	  { 
	    type: 'Bronze', 
	    price: '£599', 
	    description: "'Live day time intertainment', 'Hosting and Toasting', 'Venue'", 
	    contact: 'Enquire Today'
	  }, 
	  { 
	    type: 'Silver', 
	    price: '£799', 	    
	    description: "'Live day time intertainment', 'Early Evening', 'Hosting and Toasting', 'Venue'", 
	    contact: 'Enquire Today'
	  },
	  {
	    type: 'Gold', 
	    price: '£1199', 
	    description: "'Live day and evening time intertainment', 'Hosting and Toasting', 'Disco Show' 'DJ and music intertaiment'", 
	    contact: 'Enquire Today'
	  },
	  {
	    type: 'Platinum', 
	    price: '£1599', 
	    description: "'Live day time intertainment', 'Hosting and Toasting', 'Reception performance','Disco and lighting show', 'Special request performance'", 
	    contact: 'Enquire Today'
	  }
	];
});