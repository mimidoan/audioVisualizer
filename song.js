function Song(name) {
  this.name = name;
  this.song = loadSound("name", loaded);

   this.toggleSong = function () {
    if(!song.isPlaying()) {
      song.play();
      button.html("pause");
    } else {
      song.pause();
      button.html("play")
    }
  }

  this.jumpSong = function() {
    var len = song.duration();
    background(random(255),random(255),random(255));
    var ran = random(len);
    song.jump(ran);
    console.log(ran);
  }

  this.loaded = fucntion() {
    button = createButton("play");
    button.mousePressed(toggleSong);
    jump = createButton("jump");
    jump.mousePressed(jumpSong);

  }

}
