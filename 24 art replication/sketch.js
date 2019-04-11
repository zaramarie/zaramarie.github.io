// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(240);
  noStroke();
  ellipse(width/2, height/2, 500, 500);
  rectangles();
}

function rectangles(){
  
  for ( let i = 0; i < 300; i++){
    fill(0);
    rect(random(width/2 + 225, width/2 -225), random(height/2 + 225, height/2 -225) , random(1, 20), random(1, 20));
  }

  
}
