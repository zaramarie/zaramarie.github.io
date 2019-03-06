// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let red;
let green;
let blue;
let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  red = createSlider(0, 255, 120);
  red.position(width/2, height/2);
  red.style("width", "180px");

  green = createSlider(0, 255, 120);
  green.position(width/2, (height/2) + 40);
  green.style("width", "180px");

  blue = createSlider(0, 255, 120);
  blue.position(width/2, (height/2) + 80);
  blue.style("width", "180px");

  radio = createRadio();
  radio.option('ellipse', 1);
  radio.option('square', 2);
  radio.style('width', '60px');
  textAlign(CENTER);
  radio.position((width/2), (height/2) - 100);
}

function draw() {
  background(red.value(), green.value(), blue.value());
  
  print(red.value());
  text(red.value(), width/2, height/2 + 10);

  print(green.value());
  text(green.value(), width/2, height/2 + 50);
  
  print(blue.value());
  text(blue.value(), width/2, height/2 + 90);

  if (radio.value() === '1'){
    ellipse(width/4, height/2, 100, 100);
  }

  else if (radio.value() === '2'){
    rect(width/4, height/2, 100, 100);
  }
}
