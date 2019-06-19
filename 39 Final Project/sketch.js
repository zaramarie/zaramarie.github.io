// Final project attempt numero 1
// Zara Goldney
// June 3rd
let ghostSong;
let helloWorld;
let amplitude;
let clickCount = 0; 
ghost =[];
let speed = 8; //how many frames go by before moving
let counter = 0;
let trees = [];
let mountains = [];
let colorMod; //color modifier usually between 6 and 18
let level;  // amplitude level 
let xpos = [];  //star coordinates
let ypos = [];
const NUM_STARS = 20;   //the number of stars being made
let song = 0;  // shows what song is playing 1 = ghost choir, 2 = hello world
let treeStart = []; //holds tree x positions 
let computer = [];
let computerSpeed = 9;//how many frames go by before moving
let NUM_TREES = 12; //was going to be a constant but then i needed to change it, dont mind caps pls 
const treeSpeed = 60;//how many frames go by before moving
let treeVar = []; //holds an array of random tree variations
let NUM_MOUNTAINS = 7; //was going to be a constant but i needed to change it, dont mind caps pls
const mountainSpeed = 90;//how many frames go by before moving
let mountainVar = []; //holds an array of random tree variations
let mountainStart = [];



function preload() {
  
  //getting the songs
  soundFormats('mp3', 'ogg');
  ghostSong = loadSound('assets/ghost choir.mp3');
  helloWorld = loadSound('assets/hello world.mp3');

  //getting the ghost sprite
  for (i = 0; i < 4; i ++){
    ghost.push(loadImage("assets/ghost/ghost" +i+ ".png")); 
  }

   //getting the computer sprite
   for (i = 0; i < 4; i ++){
    computer.push(loadImage("assets/computer/computer" +i+ ".png")); 
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
  for(let i = 0; i < NUM_TREES; i ++){
    treeStart.push(random(width));
    treeVar.push(random(4));
  }

  for(let i = 0; i < NUM_MOUNTAINS; i ++){
    mountainStart.push(random(width));
    mountainVar.push(random(4));
  }
  
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
    mountainMoving();
    computerGround();
    computerAnimation();
    
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
  imageMode(CORNER);
  image(ghost[counter], width/2 - 125, height/2, 200, 300);
 
  
  if ( frameCount % int(speed) === 0){
    counter++;
    if (counter > 3){
      counter = 0;
    }
  }
  
}

function computerAnimation(){
  //running through the ghost pngs to make animation
  imageMode(CORNER);
  image(computer[counter], width/2 - 225, height/2, 400, 500);
 
  
  if ( frameCount % int(computerSpeed) === 0){
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
  //tree animation
  imageMode(CENTER);
  //a set number of start trees
  for(let i = 0; i < NUM_TREES; i ++){
    image(trees[int(treeVar[i])], treeStart[i], height - height/5, 200, 500);

    if ( frameCount % int(treeSpeed) === 0){
      treeStart[i]--;
      
    }
  }
  //continusly adds more trees
  if (frameCount % 2000 === 0){
    NUM_TREES++;
    treeVar.push(random(4));
    treeStart.push(width + random(200));
  }
}

function mountainMoving(){
  //tree animation
  imageMode(CENTER);
  //start mountains
  for(let i = 0; i < NUM_MOUNTAINS; i ++){
    image(mountains[int(mountainVar[i])], mountainStart[i], height - height/5, 500, 300);

    if ( frameCount % int(mountainSpeed) === 0){
      mountainStart[i]--;
      
    }
  }
  //continously adding more mountains
  if (frameCount % 4000 === 0){
    NUM_MOUNTAINS++;
    mountainVar.push(random(4));
    mountainStart.push(width +random(600));
  }

}

