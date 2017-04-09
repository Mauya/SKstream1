app.controller('videoController',
        ['$scope', function($scope) {
        $scope.videoSrc =[
         {
           pict:"asset/video/Parov Stelar-Booty Swing.mp4",
           id: '1',
           name: 'Parov Stelar-Booty'           
          },
          {
          	pict:"asset/video/pikachu-dance.make4fun.com.5223f.mp4",
          	id: '2',
          	name: 'pikachu-dance'            
           }
        ],
        $scope.$on('$viewContentLoaded', function () {
        
        $scope.mediaPlayer.play();
    });
}]);

