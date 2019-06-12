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
let trees = [];
let mountains = [];
let colorMod; //color modifier usually between 6 and 18
let level;  // amplitude level 
let xpos = [];  //star coordinates
let ypos = [];
const NUM_STARS = 20;   //the number of stars being made
let song = 0;  // shows what song is playing 1 = ghost choir, 2 = hello world
let treeStart; //holds tree x pos 




function preload() {
  
  //getting the songs
  soundFormats('mp3', 'ogg');
  ghostSong = loadSound('assets/ghost choir.mp3');
  helloWorld = loadSound('assets/hello world.mp3');

  //getting the ghost sprite
  for (i = 0; i < 4; i ++){
    ghost.push(loadImage("assets/ghost/ghost" +i+ ".png")); 
  }

  //getting trees
  for (i = 0; i < 4; i ++){
    trees.push(loadImage("assets/trees/tree" +i+ ".png")); 
  }

  //getting mountains
  for (i = 0; i < 5; i ++){
    mountains.push(loadImage("assets/mountains/mountain" +i+ ".png")); 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  treeStart = width;
 
}


function draw() {

  //ghost song playing
  if (song === 1){
    ghostBackgroundColor();
    stars();
    treeMoving();
    ghostGround();
    ghostAnimation();
    
    }

  //hello world playing
  if(song === 2){
    computerBackgroundColor();
    computerGround();
    
    }
}

function mouseClicked(){
  //song control

  clickCount += 1;
  ghostSong.stop();
  helloWorld.stop();

   //click to start song one


  if(clickCount % 2 > 0){
    song = 1;
    //song one is ghost song

    ghostSong.setVolume(1.0);
    ghostSong.play();
    amplitude = new p5.Amplitude();
    starsPos();
    
  }
  
  //click again to start song two
 
  else if(clickCount %2 === 0){
    song = 2;
   //song two is hello world

    helloWorld.setVolume(1.0);
    helloWorld.play();
    amplitude = new p5.Amplitude();
    
  }

  //clicking again will return to song one

}


function ghostBackgroundColor(){
  //making a background
  level = amplitude.getLevel();
  colorMod = level * 100;
  background(10 + colorMod, 10 + colorMod, 50 - colorMod);
}

function computerBackgroundColor(){
  //making a background
  level = amplitude.getLevel();
  colorMod = level * 100;
  background(250 + colorMod, 160 + colorMod, 160 + colorMod);
}

function stars(){
  //draws stars
  for(let i = NUM_STARS; i > 0; i--){
    let sizeMod = level * 50;
    //sizeMod makes stars jiggle
    noStroke();
    fill(200 + colorMod, 200 + colorMod, 100 + colorMod);
    ellipse(xpos[i], ypos[i], sizeMod);
 }
}

function starsPos(){
  //created constant star positions
  for(let i = NUM_STARS; i > 0; i--){ 
    xpos.push(random(width));
    ypos.push(random( height));
   }
}



function ghostAnimation(){
  //running through the ghost pngs to make animation
  image(ghost[counter], width/2 - 125, height/2, 200, 300);
 
  
  if ( frameCount % int(speed) === 0){
    counter++;
    if (counter > 3){
      counter = 0;
    }
  }
  
}



function ghostGround(){
  //makes ground for ghost scene
  fill(1, colorMod *2, 5);
  rectMode(CENTER);
  noStroke();
  rect(0, height, width*2, height/5);
}

function computerGround(){
  //makes ground for ghost scene
  fill(50 + colorMod, colorMod + 160, 120 + colorMod);
  rectMode(CENTER);
  noStroke();
  rect(0, height, width*2, height/5);
}

function treeMoving(){
  image(trees[0], treeStart, height/1.9, 200, 300);

  if ( frameCount % int(speed) === 0){
    treeStart--;
    
  }

}

