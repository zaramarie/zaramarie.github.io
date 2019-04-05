// roll over
// Zara Goldney
// April 5

let quadrant = 1; // 1 up right, 2 up left
              // 3 lower left, 4 lower right
let r1 = 255;
let g1 = 160;    //fill variables
let b1 = 200;

let r2 = 255;
let g2 = 160;
let b2 = 200;

let r3 = 255;
let g3 = 160;
let b3 = 200;

let r4 = 255;
let g4 = 160;
let b4 = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function makingQuadrants(){
  //illustrating the lines that seperate quadrants
  fill(0);
  strokeWeight(4);
  stroke(255, 160, 200);
  rect(width/2, 0, width/2, height/2);
  rect(0, 0, width/2, height/2);
  rect(0, height/2, width/2, height/2);
  rect(width/2, height/2, width/2, height/2);
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


function changeFills(){ //changing the fills 
  if (quadrant === 1){
     r1 = 255;
     g1 = 160;
     b1 = 200;
     fill(r1, g1, b1);
    rect(width/2, 0, width/2, height/2);
  }
  else if (quadrant != 1){
    r1 -= 20;
    g1 -=20;
    b1 -= 20;
    fill(r1, g1, b1);
    rect(width/2, 0, width/2, height/2);
 }
   if (quadrant === 2){
     r2 = 255;
     g2 = 160;
     b2 = 200;
     
    fill(r2, g2, b2);
    rect(0, 0, width/2, height/2);
  }
  else if (quadrant != 2){
    r2 -= 20;
    g2 -=20;
    b2 -=20;
    fill(r2, g2, b2);
    rect(0, 0, width/2, height/2);
 }
  if (quadrant === 3){
     r3 = 255;
     g3 = 160;
     b3 = 200;
     fill(r3, g3, b3);
    rect(0, height/2, width/2, height/2);
  }
  else if (quadrant != 3){
    r3 -= 20;
    g3 -=20;
    b3 -=20;
    fill(r3, g3, b3);
    rect(0, height/2, width/2, height/2);
 }
   if (quadrant === 4){
     r4 = 255;
     g4 = 160;
     b4 = 200;
     fill(r4, g4, b4);
     rect(width/2, height/2, width/2, height/2);
  }
  else if (quadrant != 4){
    r4 -= 20;
    g4 -=20;
    b4 -=20;
    fill(r4, g4, b4);
    rect(width/2, height/2, width/2, height/2);
 }
}


function draw() {
  background(255);
  makingQuadrants();
  determineQuadrant();
  changeFills();
  
}
