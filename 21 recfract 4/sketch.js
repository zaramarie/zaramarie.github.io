//Zara Goldney
//refract 4
//april 4 2019
let blackOrWhite = 0;

function setup() {
  createCanvas(600, 600);
}
function draw() {
  makeRects();
}

function makeRects(){
  blackOrWhite = 0; 
  for( let x = 0; x < 525; x += 75){
    for ( let y = 0; y < 525; y += 75){
      if (blackOrWhite % 2 === 0){
        fill(255)
      }
      else {
        fill(0);
      }
      rect(x, y, 75, 75);
      blackOrWhite++;
    }
  }
}
  
