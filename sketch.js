var song;
var button;

// var slider;
// var slierRate;
// var sliderPan;

// function preload() {
//   song = loadSound("forward.mp3");
// }

function setup() {
  createCanvas(400, 400);
  // sliderRate = createSlider(0, 3, 0.5, 0.01);
  // sliderPan = createSlider(-1, 1, 0, 0.01);

  song = loadSound("forward.mp3", loaded);
  button = createButton("play");
  button.mousePressed(toggleSound);
  background(31);

}

function loaded() {
  console.log("loaded");
}

function toggleSound() {
  if(!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }

}

// function draw() {
//   background(random(255);
//
//   // song.setVolume(slider.value());
//     // song.pan(sliderRate.value());
//     // song.rate(sliderPan.value());
// }
