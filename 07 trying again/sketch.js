// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

quadrant = 1 // 1 up right, 2 up left
              // 3 lower left, 4 lower right

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function determineQuadrant(){
  if (mouseX < width/2){
    if (mouseY < height/2) quadrant = 2; // top L
    else quadrant = 3; //bottom L
  }
  else { //right side
    if (mouseY < height/2) quadrant = 1; //topr
    else quadrant = 4;
  }
} 

function fills(){
if (quadrant === 1){
  fill(0);
  rect(width/2, 0, width/2, height/2);
}
if (quadrant === 2){
  fill(0);
  rect(0, 0, width/2, height/2);
}
if (quadrant === 3){
  fill(0);
  rect(0, height/2, width/2, height/2);
}
if (quadrant === 4){
  fill(0);
  rect(width/2, height/2, width/2, height/2);
}
}


function draw() {
  background(255);
  
  determineQuadrant();
  print(quadrant);
  fills();
  
}
