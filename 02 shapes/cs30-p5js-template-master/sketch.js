// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
  background(0);
  noStroke();
}

function draw() {
  //background(220);
  ellipse(x, y, 25);
  x += xSpeed;
  y += ySpeed;

  if(x < 0 || x > width){
    xSpeed *= -1;
  }
  if(y < 0 || y > height) {
    ySpeed *= -1;
  }
}

function mousePressed(){
  fill( random(250),random(250),random(250));
 
  
}

function mouseReleased(){
  fill( random(250),random(250),random(250));
  
}