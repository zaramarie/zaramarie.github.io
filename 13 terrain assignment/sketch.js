// terrain
// Zara Goldney
// April 10


let tWidth = 1;
let start = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function drawTerrain(){
  colorMode(HSB, 300);
  let xOff = start;
  let highest = height;
  let highestX = 0;
  for(let x = 0; x < width ; x += tWidth){
    let currentHeight = noise(xOff) * height;
    rect(x, noise(xOff) *height, x + tWidth, height);
    xOff += 0.01;
    stroke(x/50 % 300, 280, 330);
  }
  start += 0.01;
}

function draw() {
  background(0);
  drawTerrain();
}