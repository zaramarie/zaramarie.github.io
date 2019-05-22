// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let pArray = [];
let gear;

function preload(){
  gear = loadImage("/assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  pArray.push(new Particle(mouseX, mouseY));
 
  for( let i = 0; i < pArray.length; i++){
    pArray[i].move();
    pArray[i].display();
    if (pArray[i].isLive === false){
      pArray.splice[i, 1];
      i--
    }
  }
}



class Particle{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_, 0, width, 0, 255), map(y_, 0, height, 0, 255), map(x_, 0, width, 255, 0));
    this.size = random(10, 30);
    this.ySpeed = random(-1, 1);
    this.xSpeed = random(-0.5, 0.5);
    this.lifeTime = int(random(400, 1000));
    this.GRAV = -0.02;
    this.maxLifeTime = this.lifeTime;
    this.steps = 0;
    }

    floorCollision(){
      if ( this.y > height){
        this.y = height;
        this.ySpeed *= -1;
      }
    }
  
    isLive(){
      if (this.lifeTime > 0){
        return true;
      }
      else {
        return false;
      }
    }

    move(){
    this.lifeTime -= 1;
    this.ySpeed += this.GRAV;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.floorCollision();
    this.steps++;
  }

  display(){
    noStroke();
    ellipseMode(CENTER);
    fill(this.c);
    push();
    translate(this.x, this.y);
    scale(map(this.lifeTime, 0, this.maxLifeTime, 0, 1));
    rotate(radians(this.step*3));
    image(gear, 0, 0, this.size, this.size);
    pop();
  }

}