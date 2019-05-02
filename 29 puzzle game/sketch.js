// grid demo
// zara 
// april 29
const NUM_ROWS = 4;
const NUM_COLS = 5;
let gridData = [[0, 255, 0, 255, 0],
               [255, 0, 255, 0, 255],
               [0, 255, 0, 255, 0],
               [255, 0, 255, 0, 255]];
let rectWidth, rectHeight;
let currentRow, currentCol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomGrid();
}

function draw() {
  background(220);
  drawGrid();
  determineActiveSquare();
  checkWin();
}

function randomGrid(){
  //makes gridData random
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x ++){
      let blackOrWhite = random(4);

      if (blackOrWhite < 2){
        gridData[y][x] = 0;
      }

      else{
        gridData[y][x] = 255;
      }
    }
  }
}

function drawGrid(){
  //render a grid of squares
  // colour of set stored in 2d array
  for(let y = 0; y < NUM_ROWS; y ++){
    for(let x = 0; x < NUM_COLS; x++){
      fill(gridData[y][x]);
      rect(x *rectWidth , y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function determineActiveSquare(){
  //expression to run each frame and to determine 
  //where the mouse is
  currentRow = int(mouseY/ rectHeight);
  currentCol = int (mouseX/ rectWidth);
  //print(currentCol, currentRow);
}

function flip(col, row){
  if (col >= 0 && col< NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0){
      gridData[row][col] = 255;
    }
    else{
      gridData[row][col] = 0;
    }
  }
}


 function mousePressed(){
   //changes value of rectangle and surrounding rectangles
  if (mouseButton === LEFT) {
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
  // changes only current rectangle's value
  if (mouseButton === CENTER){
    flip(currentCol, currentRow);
  }
 }

 function winStatement(){
    fill(220, 40, 200);
    textSize(width/8);
    textAlign(CENTER, CENTER);
    text("YOU WIN", width/2, height/2);
 }


 function checkWin(){
   //checks to see if the game is completed 
   let counter = 0;
   for( let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      counter = counter + gridData[y][x];
    }
  }
  if (counter === 0 || counter === 255 *NUM_ROWS*NUM_COLS){
    winStatement();
  }
 }