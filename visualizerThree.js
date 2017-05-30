var song;
var button;
var jump;
var fft;
var w;


var volHist = [];


function setup() {
  createCanvas(500, 500);
  background(255,0,255);
  colorMode(HSB);
  angleMode(DEGREES);

  song = loadSound("sounds/xx.mp3", loaded);
  fft = new p5.FFT(0, 64);

  w = width / 64;


}

function draw() {

  background(0);
  var spectrum = fft.analyze();

  stroke(random(255), random(255),random(255));
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    fill(255, i, 255);
    var y = map(amp, 0, 256, height, 0);
    rect(i * w, y, w, height - y);

  }

  stroke(255);
  noFill();


}


function loaded() {
  button = createButton("play");
  button.mousePressed(toggleSong);
  jump = createButton("jump");
  jump.mousePressed(jumpSong);
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
