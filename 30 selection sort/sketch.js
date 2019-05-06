// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values = [];
const arraySize = 1000;

function setup() {
  noCanvas();
  noLoop();
  populateArray();
}

function populateArray(){
  for ( let i = 0; i < arraySize; i++){
    values.push(int(random(arraySize)));
  }
}

function selectionSort(){
  //one value at a time
  //find min value and swap

  for(let index = 0; index < values.length - 1 ; index++){
      
      let minimum = values[index];
      let minimumLocation = index;
      for( let checkIndex = index + 1; checkIndex < values.length; checkIndex++){
          let curr = values[checkIndex];
          if (curr < minimum){
            minimum = curr;
            minimumLocation = checkIndex;
          }
      }
      //swap item at index with the item at minimumLocation
      let temp = values[index];
      values[index] = values[minimumLocation];
      values[minimumLocation]= temp;
  }
}

function binarySearch(n){
  while (values.length > 1){
    let index = int(values.length/2);
    if ( values[index] === n){
      return true;
    }
    
    else {
      if (values[index] > n){
        //get rid of the smaller numbers
        values.splice(n);
      }
      else {
        //get rid of the smaller numbers
        values.splice(0, int(values.length/2));
      }

    }
  }
  return false;

}

function draw() {
  background(220);

  print(values);
  selectionSort();
  print(values);
  print(binarySearch(52));
}
