// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let spriteB =[];
let spriteF = [];
let spriteL = [];
let spriteR = [];
let currentX;
let currentY;
let speed = 8;
let counter = 0;
direction = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentX = width/2;
  currentY = height/2;
}
function preload(){
  for (i = 1; i < 5; i ++){
    spriteB.push(loadImage("assets/eggB" +i+ ".png")); 
  }
  for (i = 1; i < 5; i ++){
    spriteF.push(loadImage("assets/eggF" +i+ ".png")); 
  }
  for (i = 1; i < 5; i ++){
    spriteL.push(loadImage("assets/eggL" +i+ ".png")); 
  }
  for (i = 1; i < 5; i ++){
    spriteR.push(loadImage("assets/eggR" +i+ ".png")); 
  }
}

function idle(){
  if (direction === 1){
    image(spriteF[counter], currentX, currentY, 250, 250);
  }
  else if (directon === 2){
    image(spriteB[counter], currentX, currentY, 250, 250);
  }
  if ( frameCount % int(speed) === 0){
    counter++;
    if (counter > 3){
      counter = 0;
    }
  }
}

function keyPressed(){
if(keyCode === DOWN_ARROW){
  directon = 1;
  currentY = currentY + 20;
 }
 if(keyCode === UP_ARROW){
   direction = 2;
  currentY = currentY - 20;
 }

}

function draw() {
  background(220, 0, 50);
  imageMode(CENTER);
  idle();
}
