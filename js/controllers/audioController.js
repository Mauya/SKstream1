app.controller('audioController', function($scope) {
	$scope.musicTitle='The Swing Crew Music'; //can list as much of their music as they want.
  var audio=$('#audio-player')[0];

  var audiolist;
  var len;
  var current=0;

  audiolist= [
  {id: '1', name: 'Neonlight', singer: 'Chris Young', path: 'http://hiperload.com/s/jh1u97u7d/s.mp3', length: '3:43'},
  {id: '2', name: 'Happy birthday swing', singer: 'Lucky Steven', path: 'http://hiperload.com/s/ek6c42n9w/s.mp3', length: '0:32'},
  {id: '3', name: 'What a wonderful world', singer: 'Louis Armstrong', path: 'http://hiperload.com/s/pm0l44l0u/s.mp3', length: '2:29'},
  {id: '4', name: 'Stand by me', singer: 'Otis Redding', path: 'http://hiperload.com/s/ic8v45l4g/s.mp3', length: '2:55'},
  {id: '5', name: 'Neon', singer: 'Unknown', path: 'http://hiperload.com/s/jm4i99w4f/s.mp3', length: '1:04'},
  {id: '6', name: 'Modern', singer: 'Unknown', path: 'http://hiperload.com/s/kn0h81b5p/s.mp3', length: '1:02'}
  ]

  len = audiolist.length - 1;

  // audio.volume = 0.10;
  run(audiolist[0], audio);

  audio.addEventListener('ended', function(e){
    next();
    run(audiolist[current], audio);
  });
  
  $('#btnNext').on('click', function(){
    next();
    run(audiolist[current], audio);
    
    return false;
  });
  
  $('#btnPrev').on('click', function(){
    prev();
    run(audiolist[current], audio);
    
    return false;
  });
  
  $('.audio.play').on('click', function(){
    var music_id = $(this).attr('data-music-id');
    
    if(music_id != undefined){
      playById(music_id);
    }
    
    return false;
  });
    
  function run(music, player) {
    $('.audio.name').text(music.name);
    player.src = music.path;
    
    audio.load();
    audio.play();
  }
  
  function next(){
    current++;
    if(current > len) current = 0;
  }
  
  function prev(){
    current--;
    if(current < 0) current = 0;
  }
  
  function playById(id){
    var audiolist_id = undefined;
    
    $.each(audiolist, function(index, value){
      if(value.id == id){
        audiolist_id = index;
      }
    });
    
    if(audiolist_id != undefined){
      current = audiolist_id;
      run(audiolist[current], audio);
    }
  }
  
});

