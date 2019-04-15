// art replication
// zara goldney
// april 15
//
// what up my name is zara im 18 and never learned how to use lines


let x = random(width);
let y = random(height);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(255);
  noStroke();
  ellipse(width/2, height/2, 500, 500);
  rectangles();
}

function rectangles(){
  let x = random(windowHeight);
  let y = random(windowHeight);
  
  for ( let i = 0; i < 1000; i++){
    fill(0);
      if ((dist(width/2, height/2, x, y) < 250)){
      
       rect(x, y, random(1, 20), random(1, 20));
      }
    x = random(width);
    y = random(height);
  } 
}
