// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  rectangles(width/2, height/ 2, height*0.6);
}

function rectangles(x, y, len){
 if(len > 5){
  rect(x, y, len, len);
  let half = len/2;
  rectangles(x - half, y - half, half);
  rectangles(x + half, y - half, half);
  rectangles(x - half, y + half, half);
  rectangles(x + half, y + half, half);
 }
}