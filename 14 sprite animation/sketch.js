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

function setup() {
  createCanvas(windowWidth, windowHeight);
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

function draw() {
  background(220);
  imageMode(CENTER);
  print (spriteB);
  image(spriteF[0], width/2, height/2, 200, 200);
   
}
