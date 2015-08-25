app.controller("SongCtrl", function($scope) {
  $scope.newSong =     { 
      "title": "", 
      "artist": "", 
      "album": {
        "name": "", 
        "year": ""} 
      }
  $scope.songs = [
    { 
      "title": "Love Is A Losing Game", 
      "artist": "Amy Winehouse", 
      "album": {
        "name": "Back to Black", 
        "year": "2006"} 
    },
    { 
      "title": "Legs", 
      "artist": "ZZTop", 
      "album": {
        "name": "Eliminator", 
        "year": "1983"}
    },
    { 
      "title": "The Logical Song", 
      "artist": "Supertramp", 
      "album": {
        "name": "Breakfast in America", 
        "year": "1979"} 
      }
  ];

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  }; 

  $scope.addSong = function() {
    $scope.songs.push({ 
      title: $scope.newSong.title, 
      artist: $scope.newSong.artist, 
      album: {
        name: $scope.newSong.album.name, 
        year: $scope.newSong.album.year } 
    });

  };  


});
