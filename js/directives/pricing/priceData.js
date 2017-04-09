app.directive('priceData', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      data: '=' 
    }, 
    templateUrl: 'js/directives/priceData.html' 
  }; 
});