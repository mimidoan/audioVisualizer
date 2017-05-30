var song;
var button;
var jump;
var amp;


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
  var diam = map(vol, 0, 1, 10, 500);


  ellipse(width/2, height/2, diam, diam);
//  background(random(255),random(255),random(255));
}

function toggleSong() {
  if(!song.isPlaying()) {
    song.play();
//    background(random(255),0,255);
    button.html("pause");
  } else {
    song.pause();
  //  background(255,0,40);
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
