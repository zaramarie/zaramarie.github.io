let mySound, reverb;

function preload() {
  mySound = loadSound('/assets/energy.mp3');
  reverb = new p5.Reverb();
 }

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function mouseIsPressed(){
  mySound.setVolume(0.1);
  mySound.play();
  reverb.process(soundFile, 5, 1);
}