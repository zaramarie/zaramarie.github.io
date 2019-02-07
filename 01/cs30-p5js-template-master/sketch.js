// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let X = 45;
let XSpeed =6;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(0);
  fill(255,204,0);
  ellipse(X,200, 200);
  fill(50);
  rect(mouseX,400,75,75);
  X += XSpeed;
  if (X > windowHeight) X =30
}
