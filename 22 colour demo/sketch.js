// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectWidth = 10;
let rectHeight = 50;
let colours = ["#5B0D12", "#CD4060", "#E86D96", "#FDBFD2", "#FFE3DA"];
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowRGB(windowHeight * 0.2);
  drawRowHSB(height/ 2);
  drawRowCustom(height *0.08 );
}

function drawRowRGB(yPos) {
  colorMode(RGB);
  for(let x = 0; x < windowWidth; x+= rectWidth){
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowHSB(yPos) {
  colorMode(HSB, 360);
  for (let x = 0; x < windowWidth; x += rectWidth){
    fill(x/10 % 360, 280, 330);
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowCustom(yPos) {
  colorMode(RGB);
  for (let x = 0; x < windowWidth; x += rectWidth){
    fill(colours[counter% 5]);
    rect(x, yPos, rectWidth, rectHeight);
    counter++;
  }
}

function draw() {
 
}
