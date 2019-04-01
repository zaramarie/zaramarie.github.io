// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let walker = [];
const NUM_WALKERS = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0 ; i < NUM_WALKERS; i++){
    walker.push(new Walker(random(width), random(height)));
  }
}

function draw() {
  for (let i = 0; i < NUM_WALKERS; i ++){
    walker[i].move();
    walker[i].display();
  }
}


class Walker{
  //constructor and class properties
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.speed = Math.floor(random(50));;
    this.size = Math.floor(random(100));
    this.c = color(random(255), random(20), random(60));
  }
  //the class methods 
  display(){
    rectMode(CENTER);
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
    }

  move(){
    let myChoice = Math.floor(random(4));
    if (myChoice === 0){
      this.x += this.speed;
    }  
    else if (myChoice === 1){
      this.x -= this.speed;
    }
    else if (myChoice === 2){
      this.y -= this.speed;
    }
    else{
      this.y += this.speed;
    }

  }
}