// var app = angular.module("bandApp", []);
// app.factory('audiofactory', function($document) {
//    var audio = $document[0].createElement('audio');  
//    return audio;
// }); 

// angular.module("bandApp").service("audioService", function (AudioFactory) {
// 	var mediaPlayer = {
// 		isPaused: true,
// 		//band music files.
// 		audioList: [
// 	  {id: '1', name: 'Neonlight', singer: 'Chris Young', path: 'http://hiperload.com/s/jh1u97u7d/s.mp3', length: '3:43'},
// 	  {id: '2', name: 'Happy birthday swing', singer: 'Lucky Steven', path: 'http://hiperload.com/s/ek6c42n9w/s.mp3', length: '0:32'},
// 	  {id: '3', name: 'What a wonderful world', singer: 'Louis Armstrong', path: 'http://hiperload.com/s/pm0l44l0u/s.mp3', length: '2:29'},
// 	  {id: '4', name: 'Stand by me', singer: 'Otis Redding', path: 'http://hiperload.com/s/ic8v45l4g/s.mp3', length: '2:55'},
// 	  {id: '5', name: 'Neon', singer: 'Unknown', path: 'http://hiperload.com/s/jm4i99w4f/s.mp3', length: '1:04'},
// 	  {id: '6', name: 'Modern', singer: 'Unknown', path: 'http://hiperload.com/s/kn0h81b5p/s.mp3', length: '1:02'}
//         ],
// 		//set source of the audio player to the current track.
// 	currentIndex: 0,
	     
// 	    play: function () {
// 	       mediaPlayer.isPaused = false;
// 	       AudioFactory.src = mediaPlayer.audioList[mediaPlayer.currentIndex];
// 	       AudioFactory.play();
// 	    },
	     
// 	    pause: function () {
// 	        mediaPlayer.isPaused = !mediaPlayer.isPaused;
// 	        if (mediaPlayer.isPaused) {
// 	            AudioFactory.pause();
// 	        } else {
// 	            AudioFactory.play();
// 	        }
// 	    },

// 	    previous: function () {
//             if (mediaPlayer.currentIndex > 0) {
//                 mediaPlayer.currentIndex--;
//                 mediaPlayer.play();
//             }
//           },
 
// 		next: function () {
//             if (mediaPlayer.currentIndex < mediaPlayer.audioList.length) {
//                 mediaPlayer.currentIndex++;
//                 mediaPlayer.play();
//             }
//           }
// 	  };
	   
// 	  return mediaPlayer;
// 	});



