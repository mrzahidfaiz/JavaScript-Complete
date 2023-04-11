/* 2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested. */

let array = [5, 6, 2, 4];
let search = 2;
function searchInArray(array, search) {
  if (array.length == 0) {
    return false;
    //console.log(array); // [5, 6, 2, 4]
  }
  if (array[0] == search) {
    return true;
    //console.log(array); // 2 [2, 4]
   
    
  }
  // console.log(array.splice(1)) ///[6,2,4]
  return searchInArray(array.slice(1), search); 
}
//slice methed remove (1) 1st index value on each call
let result = searchInArray(array, search);
console.log(result);

