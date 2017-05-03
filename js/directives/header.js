app.directive('header', function() { 
  return { 
    restrict: 'E', 
    transclude: true,
    replace: true,
    scope: {
    	info: "="
    },
    templateUrl: 'js/directives/header.html',
    controller: 'headerController'
  }; 
});


