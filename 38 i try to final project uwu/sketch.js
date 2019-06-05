// Final project attempt numero 1
// Zara Goldney
// June 3rd
let ghostSong;
let helloWorld;
let amplitude;
let clickCount = 0;
ghost =[];
let speed = 8;
let counter = 0;


function preload() {
  soundFormats('mp3', 'ogg');
  ghostSong = loadSound('assets/ghost choir.mp3');
  helloWorld = loadSound('assets/hello world.mp3');


  for (i = 0; i < 4; i ++){
    ghost.push(loadImage("assets/ghost/ghost" +i+ ".png")); 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  if(clickCount % 2 > 0){
    ghostAnimation();
    
  }
}

function backgroundColor(){
  let level = amplitude.getLevel();
  let colorMod = level * 100;
  print(level);
  background(100 + colorMod, 100 + colorMod, 255 - colorMod);
}

function mouseClicked(){
  clickCount += 1;
  ghostSong.stop();
  helloWorld.stop();

  if(clickCount % 2 > 0){
    ghostSong.setVolume(1.0);
    ghostSong.play();
    amplitude = new p5.Amplitude();
    backgroundColor();
    
  }
  
  else if(clickCount %2 === 0){
    helloWorld.setVolume(1.0);
    helloWorld.play();
    amplitude = new p5.Amplitude();
    backgroundColor();
  }
}



function ghostAnimation(){

  image(ghost[counter], width/2, height/2, 200, 300);
 
  
  if ( frameCount % int(speed) === 0){
    counter++;
    if (counter > 3){
      counter = 0;
    }
  }
  
}