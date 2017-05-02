app.directive('subscribe', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
    templateUrl: 'js/directives/subscribe.html',
    controller: "subscribeController"
  }; 
});