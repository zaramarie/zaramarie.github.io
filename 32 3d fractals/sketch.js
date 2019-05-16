// 3d primatives and fractal 
//zara goldney
let angle = 5;
let angleSpeed = 1;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  angle += angleSpeed;
  if (angleSpeed < 40 || angleSpeed > 40){
    angleSpeed *= -1;
  }
  angle = map(mouseX, 0, width, -120, 120);
  background(220);
  //rotateY(radians(frameCount));
  //box(100);
  push();
  rotateY(radians(frameCount));
  for ( let i = 0; i < 360; i += 45){
    push();
    rotateY(radians(i));
    boxes(50);
    pop();
  }
    
}

function boxes(size){
  if (size > 10){
    rotateZ(radians(angle));
    translate(size*1.5, 0);
    box(size);

    boxes(size * 0.8);

  }
}