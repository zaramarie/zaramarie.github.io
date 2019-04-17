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
 makinArt();
}

function makinArt(){
  noStroke();
  fill(random(200, 255) , random(100, 180), random(180, 220) );
  
  for(let x = 0; x < 20; x += 10){
    for( let y = 0; y < 20 ; y += 10){
      bezier(random(width/x), random(height/y), random(width/x), random(height/y), random(width/x), random(height/y), random(width), random(height));
    }
  }

 

}

function keyPressed(){
  if ( keyCode === 32 ){
    save();
  }
}