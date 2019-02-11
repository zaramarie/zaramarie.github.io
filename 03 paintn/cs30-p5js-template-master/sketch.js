// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}


function keyTyped() {
  if (key === 'a') {
    rect(mouseX, mouseY, 55, 70);
  }
  if (key === 's'){
    ellipse(mouseX, mouseY, 70, 55);
  }
  if (key === 'd'){
    triangle(mouseX, mouseY, mouseX + 40, mouseY + 80, mouseX + 80, mouseY);
  }
}

function keyPressed() {
  fill(random(255), random(255), random(255));
}