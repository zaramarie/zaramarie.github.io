// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function rectangles(){
 
rect(0, 0, width/2, height/2);
rect(width/2, height/2, width/2, height/2);
rect(width * 2, height * 2, width/2, height/2);

}

function draw() {
  background(255);
  rectangles();
}
