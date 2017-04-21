angular.module('RouteControllers', [])
app.controller('audioController', ['$scope', 'audiofactory', 'audioService', function($scope, audioService, audiofactory) {
	$scope.musicTitle='The Swing Crew Music' //can list as much of their music as they want.
    $scope.audio = audioService.mediaPlayer;
    $scope.update = function(){
      $scope.audio.isPaused;
      $scope.audioList=audiolist;
    }
}]);
