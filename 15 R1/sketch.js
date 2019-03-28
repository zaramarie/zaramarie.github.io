//zara goldney
//refractor one 
//March 28th

let x, y, changeX, changeY;
// x = x position 
// y = y positon
// changeX = changes x value
// changeY = changes y value 

function setup() {
	createCanvas(windowWidth, windowHeight);
  // assigning values to variables
  x = 200; 
	y = 300; 
  changeX = random(3,8); 
	changeY = random(3,8);
}


function draw() {
	moveRect();
	background( 80, 80, 80);
	rect( x, y, 250, 75); 
}

function moveRect(){
 //changes x and y values
  x += changeX; 
  y += changeY;
  
  // keeps rectangle within the window
	if (y >= height - 75 || y <= 0){
    changeY = changeY * - 1;
  }
  
  if ( x >= width - 250 || x <=0 ){ 
    changeX = changeX * -1;
  }
}