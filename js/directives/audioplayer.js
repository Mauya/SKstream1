app.directive('mediaPlayer', function(audioService) {
  return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/audioInfo.html',
        link: function (scope, element, attrs) {
          scope.myaudioService = audioservice;
      }
    };
});

