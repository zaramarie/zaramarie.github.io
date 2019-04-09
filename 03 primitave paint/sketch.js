// prim paint
// zara goldney
//april 9
let textS = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
}

 function myName(){
  //making my name larger
    if ( textS < 200){
     textS ++;
    }

    fill(80 + textS, 10 + textS, 40 + textS);
   noStroke();
    textFont('Georgia', textS);
    text('Zara', windowWidth/2, windowHeight/2);

    if (keyCode === 32){ //making it go awaaay
      clear();
    }
 }


function keyTyped() { //making them shapes
  if (key === 'a') {
    rect(mouseX, mouseY, 55, 70);
  }
  if (key === 's'){
    ellipse(mouseX, mouseY, 70, 55);
  }
  if (key === 'd'){
    triangle(mouseX, mouseY, mouseX + 40, mouseY + 80, mouseX + 80, mouseY);
  }
}

function draw(){
  myName();
}


function keyPressed() {
  fill(random(200, 255), random(50, 100), random(100, 220));
  noStroke(); //changin them colours

  if (keyCode === 32){
    clear();
    setup();//deletus
  }
}
