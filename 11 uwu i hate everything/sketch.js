// multi coloured grid
// zara goldney
// a sad sad day

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function chooseFill(){
  rvalue = int(random(20, 255));
  gvalue = int(random(0, 20));
  bvalue = int(random(0, 90));
  fill(rvalue, gvalue, bvalue);
}


function mousePressed(){
  let squareSize = windowWidth/26;

  if(mouseButton === RIGHT){
    squareSize += 5;
  }
  else if (mouseButton === LEFT){
    squareSize -= 5;
  }
  for(let x= 0; x <=width; x += squareSize){
    for(let y = 0; y <= height; y += squareSize){
      chooseFill();
      rect(x,y,squareSize, squareSize);
    }
  }
}


function draw() {
  background(220);
  mousePressed();
}

