// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  let s = height/8;
  for( x = 0; x <= width;x = x + s){
		for(y = 0;y <= height; y = y + s){
		    rect( x, y, s, s);
		}
	}
}
