// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 150;
let y = 150;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors.push(color(255, 0,0,0));
  colors.push(color(0, 0, 30));
  colors.push(color(40, 100, 100));
  colors.push(color(0, 0, 0));
  colors.push(color(2555, 255, 255));
}

function drawTargetWhile(){
  let diameter = 200;
  let counter = 0;
  
  while (counter < 5){
    ellipse(width/2, height/2, diameter, diameter);
    counter ++;
    diameter -= 40;
  }
}

function drawTargetFor(){
  for (let i = 5; i > 0; i --){
    fill(colors[i-1]);
    ellipse( x, y, i* 40, i* 40);
  }

}


function draw() {
  background(220);
  //drawTargetWhile();
  drawTargetFor();
}
