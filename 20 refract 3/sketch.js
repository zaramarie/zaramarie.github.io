//Zara Goldney
//Refract three
//April 4 2019

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  ellipses();
}

function ellipses(){
   //creates circles in 40px intervals
  for (i = 300; i > 40; i = i - 40){
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
    ellipse(200, 200, i, i);
  }
  
}