// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = random(width);
let y = random(height);

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0);
}

function draw() {
 
 for ( let i = 0; i < 2000; i++){
  stroke(255);
  point(x, y);
  x = x+random(100);
  y = y + random(100);
 }
 

}

function keyPressed(){
  if (keyCode === 32){
    save();
  }
}