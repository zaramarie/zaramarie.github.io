// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke();
  fill(random(20) * random(8, 10), random(4) * random(3, 10), random(18) * random( 8, 10));
  for(let x = width; x > 20; x -= 20){
    for( let y = height; y > 20; y -= 10){
      bezier(random(x), random(y), random(x), random(y), random(x), random(y), random(x), random(y));
    }
  }
}

function keyPressed(){
  if ( keyCode === 32 ){
    save();
  }
}