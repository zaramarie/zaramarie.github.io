// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX, buttonY, buttonSize;
let rectX, rectY, rectW, rectH;
let rectShade = 0;
let fadeIn = false;
let buttonOver = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width/2;
  buttonY = height/4;
  ellipseMode(CENTER);
  buttonSize = 50;
  rectX = width/2;
  rectY = height/1.8;
  rectW = width/2;
  rectH = height *0.4;
  rectMode(CENTER);
  noStroke();
}

function mouseDistance( x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a)+sq(b));
  return c;
}

function mousePressed(){
  if buttonOver {
  fadeIn = !fade;
  }
}


function draw() {
  print (mouseDistance(mouseX, mouseY, buttonX, buttonY));
  background(255);
 
  if (mouseDistance( mouseX, mouseY, buttonX, buttonY) < buttonSize/ 2){
    fill(200, 40, 50);
    buttonOver = true
  }

  else {
    fill( 160, 30, 30);
    buttonOver = false;
  }
  ellipse(buttonX, buttonY, buttonSize, buttonSize);

  if (fadeIn){
    rectShade -= 2;
  }

  else {
    rectShade += 2;
  }

  //if (frameCount % 2  === 0){
    //rectShade += 2;
  //}
   

  fill(rectShade);
  rect(rectX, rectY, rectW, rectH);
  
}
