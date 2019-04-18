// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(4500, 3000);
   background(0);
}

function draw() {
  
  noFill();
  ellipseMode(CENTER)
 
  for (let i = 3000; i < 4500; i += 6){
    stroke(200 -i/18, 220 -i/18, 255 -i/18);
    ellipse(width/2, height/2.10, i);
   } //blue
  
  for (let i = 3000; i < 4500; i += 6){
    stroke(255 -i/20, 120 -i/18, 120 -i/18);
    ellipse(width/2, height/2.00, i);
   }//red
 


   for (let i = 2000; i < 3000; i += 6){
    stroke(200 -i/13, 220 -i/12, 255 -i/12);
    ellipse(width/2, height/2.10, i);
   }//blue
  
  for (let i = 2000; i < 3000; i += 6){
    stroke(255 -i/13, 120 -i/13, 120 -i/13);
    ellipse(width/2, height/2.00, i);
   }//red
  
  


  for (let i = 2000; i < 2300; i += 6){
    stroke(255 -i/10, 220 -i/10, 240 -i/10);
    ellipse(width/2, height/2.00, i);
   }
  
  for (let i = 900; i < 2000; i += 5){
   stroke(255 -i/5, 220 -i/5, 240 -i/5);
   ellipse(width/2, height/2.00, i);
  }
  
  for (let i = 600; i < 900; i += 5){
    stroke(255 -i/3, 220 -i/3, 240 -i/3);
    ellipse(width/2, height/2.00, i);
  }
  
  for (let i = 300; i < 600; i += 5){
    stroke(255 -i/2, 225 -i/2, 240 -i/2);
    ellipse(width/2, height/2.00, i);
  }

  for (let i = 0; i < 300; i += 5){
    stroke(255 -i, 220 -i, 240 -i);
    ellipse(width/2, height/2.00, i);
  }


  
}

function keyPressed(){
  if (keyCode === 32){
    save();
  }
}