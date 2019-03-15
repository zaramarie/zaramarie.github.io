// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth = 1;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function drawTerrain(){
  let xOff = start;
  let highest = height;
  let highestX = 0;
  for(let x = 0; x < width ; x += tWidth){
    let currentHeight = noise(xOff) * height;
    rect(x, noise(xOff) *height, x + tWidth, height);
    xOff += 0.01;
  }
  start += 0.01;
}

function draw() {
  background(50);
  drawTerrain();
}