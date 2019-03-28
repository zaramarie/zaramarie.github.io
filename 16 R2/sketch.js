//zara goldney
//refractor two
//march 28th

function setup() {
  createCanvas(480, 270);
}

function fillQuad(){

 //creates black rectangle in mouses quadrant
 
 if (mouseX < 240 && mouseY < 135){
  rect( 0, 0, 240, 135);
}

else if (mouseX > 240 && mouseY < 135){
  rect( 240, 0, 240, 135);
}

else if (mouseX < 240 && mouseY > 135){
  rect( 0, 135, 240, 135);
}

else if (mouseX > 240 && mouseY > 135){
  rect( 240, 135, 240, 135);
}


}
function draw() {

  background(255);
  stroke(0);
  // creates cross in top left corner
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);

  noStroke();
  fill(0);

  fillQuad();

}
