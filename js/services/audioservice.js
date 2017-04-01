var app = angular.module("bandApp", []);
app.factory('audiofactory', function($document) {
   var audio = $document[0].createElement('audio');  
   return audio;
}); 

angular.module("bandApp").service("audioService", function (AudioFactory) {
	var mediaPlayer = {
		isPaused: true,
		//few sample tracks, these are to be replaced by band music files.
		audioList: [
	  {track: '1', name: 'Neon', singer: 'Chris Young', path: 'http://hiperload.com/s/jh1u97u7d', length: '3:43'},
	  {track: '2', name: 'Happy birthday swing', singer: 'Lucky Steven', path: 'http://hiperload.com/s/ek6c42n9w', length: '0:32'},
	  {track: '3', name: 'What a wonderful world', singer: 'Louis Armstrong', path: 'http://hiperload.com/s/pm0l44l0u', length: '2:29'},
	  {track: '4', name: 'Stand by me', singer: 'Otis Redding', path: 'http://hiperload.com/s/ic8v45l4g', length: '2:55'}
        ],
		//set source of the audio player to the current track.
	currentIndex: 0,
	     
	    play: function () {
	       mediaPlayer.isPaused = false;
	       AudioFactory.src = mediaPlayer.audioList[mediaPlayer.currentIndex];
	       AudioFactory.play();
	    },
	     
	    pause: function () {
	        mediaPlayer.isPaused = !mediaPlayer.isPaused;
	        if (mediaPlayer.isPaused) {
	            AudioFactory.pause();
	        } else {
	            AudioFactory.play();
	        }
	    },

	    previous: function () {
            if (mediaPlayer.currentIndex > 0) {
                mediaPlayer.currentIndex--;
                mediaPlayer.play();
            }
          },
 
		next: function () {
            if (mediaPlayer.currentIndex < mediaPlayer.audioList.length) {
                mediaPlayer.currentIndex++;
                mediaPlayer.play();
            }
          }
	  };
	   
	  return mediaPlayer;
	});



