// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xOff = 0.01;
let inc= 0.005;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  
 stroke(255);
 noFill();
 beginShape();
 xOff = start;
 for (let x = 0; x < width; x++){
   stroke(255);
   let y = noise(xOff)* height;
   vertex (x, y);
   xOff += inc;
 }
 endShape();
 start += inc;
}
