// Final project attempt numero 1
// Zara Goldney
// June 3rd
let ghostSong;
let helloWorld;
let amplitude;


function preload() {
  soundFormats('mp3', 'ogg');
  ghostSong = loadSound('assets/ghost choir.mp3');
  helloWorld = loadSound('assets/hello world.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ghostSong.setVolume(1.0);
  ghostSong.play();
  amplitude = new p5.Amplitude();
}


function draw() {
  let level = amplitude.getLevel();
  let colorMod = level * 100;
  print(level);
  background(100 + colorMod, 100 + colorMod, 255 - colorMod);
}
