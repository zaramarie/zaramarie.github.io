// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function rectangles(){
  rectMode(CORNER)
  //q1
  rect(width - width, height - height , width/2, height/2);
  //q2
  //rect(width + width, height  height, width/2, height/2);
  //q3
  //rect(width - width, 0, width/2, height/2);
  //q4
  rect(0, 0, width/2, height/2);


}


function draw() {
  background(255);
  rectangles();
}
