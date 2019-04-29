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
}

function draw() {
  background(220);
  drawGrid();
  determineActiveSquare();
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
  print(currentCol, currentRow);
}

function Flip(col, row){
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
  Flip(currentCol, currentRow);
  Flip(currentCol-1, currentRow);
  Flip(currentCol+1, currentRow);
  Flip(currentCol, currentRow-1);
  Flip(currentCol, currentRow+1);
}