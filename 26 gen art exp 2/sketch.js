// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0);
}

function draw() {
  
  noFill();
  ellipseMode(CENTER)
 
  for (let i = 900; i < 2000; i += 4){
   stroke(255 -i/5, 220 -i/5, 240 -i/5);
   ellipse(width/2, height/2, i);
  }
  
  for (let i = 600; i < 900; i += 4){
    stroke(255 -i/3, 220 -i/3, 240 -i/3);
    ellipse(width/2, height/2, i);
  }
  
  for (let i = 300; i < 600; i += 5){
    stroke(255 -i/2, 225 -i/2, 240 -i/2);
    ellipse(width/2, height/2, i);
  }

  for (let i = 0; i < 300; i += 5){
    stroke(255 -i, 220 -i, 240 -i);
    ellipse(width/2, height/2, i);
  }


   for (let i = 4; i < 300; i += 5){
    stroke(0);
     point(x,y);
   }
  
}

function keyPressed(){
  if (keyCode === 32){
    save();
  }
}