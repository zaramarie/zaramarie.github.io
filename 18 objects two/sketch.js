// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballObjects = [];

function mouseClicked(){
  ballObjects.push(new Ball (mouseX, mouseY));
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(220);
  for (let currentBall of ballObjects){
    
    currentBall.move();
    currentBall.mouseOver();
    currentBall.display();
  }
 
}

class Ball{
  //constructor and class properties
  //for variables
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    this.size = 30;
    this.gravity = 0.1;
  }
   //class methods 

  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += this.gravity;
    
    if (this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }
    if (this.y > height){
      this.ySpeed *= -0.92;
      this.y = height;
    }
  }
  mouseOver(){
    let d= dist(this.x, this.y, mouseX, mouseY);
    
    if (d < this.size/ 2 ){
      if (mouseIsPressed && mouseButton === CENTER){
        this.size += 20;
      }
      fill(255, 50, 100);
    }
    else{
      fill(195, 0, 50);
    }
  }
}