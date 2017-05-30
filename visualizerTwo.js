var song;
var button;
var jump;
var amp;
var color;
var img;


var volHist = [];


function setup() {
  createCanvas(700, 700);
  background(255,0,255);
  angleMode(DEGREES);

  song = loadSound("sounds/xx.mp3", loaded);
  amp = new p5.Amplitude();

  img = loadImage("images/lillith.png");

}

function loaded() {
  button = createButton("play");
  button.mousePressed(toggleSong);
  jump = createButton("jump");
  jump.mousePressed(jumpSong);

}

function draw() {
  vol = amp.getLevel();;
  rotate(PI);
  image(img, width / 3, height/3, img.width/10, img.height/10);

  volHist.push(vol);


  if(song.isPlaying()) {

  //  if(volHist.length < 360) {
     stroke(255);
  //  } else {
  //    stroke(random(255), random(255), random(255));
  //  }
   noFill();


    translate(width / 2, height /2);
    beginShape();
    for (var i = 0; i < 360; i++) {

      r = map(volHist[i], 0, 1, 10, height);
      var x = r * cos(i);
      var y = r * sin(i);

      vertex(x, y);
    }
    endShape();

      if(volHist.length > 360) {
        volHist.splice(0, 1);
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
