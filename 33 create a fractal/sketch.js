// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
sphereRadius = 100;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  spheres(100);
}

function spheres(radius){
  if (radius > 2){
    alpha(0.5);
    fill(255, 200,200);
    sphere(radius);

    spheres(radius * 0.5);
    translate(sphereRadius, sphereRadius);
  }
}
