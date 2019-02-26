// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quad1 = 0;
let quad2 = 0;
let quad3 = 0;
let quad4 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);

  rectMode(CENTER)
  
  //q1
  rect((windowWidth/2) + 100, (windowHeight/2) - 100, 200, 200);
  //q2
  rect((windowWidth/2) - 100, (windowHeight/2) - 100, 200, 200 );
  //q3
  rect((windowWidth/2) - 100, (windowHeight/2) + 100, 200, 200);
  //q4
  rect((windowWidth/2) + 100, (windowHeight/2) + 100, 200, 200);


  
}
