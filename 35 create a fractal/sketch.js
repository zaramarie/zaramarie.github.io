// create a fractal
//zara goldney
//may 21

// production rules;
// create sphere in 4 directions
// create smaller spheres till it is size 10


function setup() {
  smooth();
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  //making it move
  rotateZ(radians(frameCount));
  rotateX(radians(frameCount));
  bulbs(200);
}

function bulbs(diameter){
  if(diameter === 10){
    //base case smallest sphere
    noStroke();
    ellipsoid( diameter);
  }
  
  else{
    
    fill(diameter /0.1, diameter/0.8, diameter/0.8);
    push();
    translate(diameter *2, 0, 0);
    ellipsoid(diameter);
    pop();
   
    push();
    translate(diameter * -2, 0, 0);
    ellipsoid(diameter);
    pop();

    push();
    translate(0, diameter *2, 0);
    ellipsoid(diameter);
    pop();

    push();
    translate(0, diameter * -2, 0);
    ellipsoid(diameter);
    pop();



    push();
    translate(diameter *2, 0, 0);
    ellipsoid(diameter);
    pop();
   
    push();
    translate(diameter * -2, 0, 0);
    ellipsoid(diameter);
    pop();

    push();
    translate(0, diameter *2, 0);
    ellipsoid(diameter);
    pop();

    push();
    translate(0, diameter * -2, 0);
    ellipsoid(diameter);
    pop();
    //calling it smaller
    bulbs(diameter - 10);
   
  }
}