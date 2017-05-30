var song;
var button;
var jump;
var amp;
var color;


var volHist = [];


function setup() {
  createCanvas(400, 400);
  song = loadSound("sounds/afro-asian.m4a", loaded);
  amp = new p5.Amplitude();
  background(255,0,255);


}

function loaded() {
  button = createButton("play");
  button.mousePressed(toggleSong);
  jump = createButton("jump");
  jump.mousePressed(jumpSong);

}

function draw() {
  vol = amp.getLevel();
  // var num = random(10000);
  // if(vol > (vol * .990)) {
  // //  background(random(255),random(255),random(255));
  // }

  volHist.push(vol);




  if(song.isPlaying()) {
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255))

    beginShape();
    for (var i = 0; i <volHist.length; i++) {
      var y = map(volHist[i], 0, 1, height, 0);
      vertex(i, y);
    }
    endShape();

    if(volHist.length > width-10) {
      volHist.splice(0, 1);
    }


  if(volHist.length < width) {
    // color = line(volHist.length, 0, volHist.length, height);
    // stroke(255,0,0);
  } else {
    color.splice(0,1);
  }
}



}


function toggleSong() {
  if(!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play")
  }
}

function jumpSong() {
  var len = song.duration();
  background(random(255),random(255),random(255));
  var ran = random(len);
  song.jump(ran);
  console.log(ran);
}
