function letterCount(string) {
  var sortedLetters = string.split("").sort();
  var current_letter = "";
  var current_count = 0;
  var letterCountResult = [];
  for (var index = 0; index < string.length; index++) {
      current_letter = sortedLetters[index]
     ++current_count;
     if (sortedLetters[index] !== sortedLetters[index+1]) {
         letterCountResult.push(current_letter);
         letterCountResult.push(current_count);
         current_count = 0;
     }
  }
  return letterCountResult.join("")
}
// letterCount("ccaabbaa") => 'a4b2c2'

function replaceSpace(string) {
  var formatedString = string.trim().replace(/\s+/g, '%20')
  return formatedString;
}
// replaceSpace("  john lin     !  ") => 'john%20lin%20!'

function arrayRotate(array){
  array.push(array.shift());
  return array;
}
// arrayRotate(['h','e','l','l','o']) => ['o','h','e','l','l'];

function bisearch(array, num){
  var low = 0;
  var high = array.length-1;
    while(true) {
       var mid =  Math.floor((low + high) / 2);
       if (num === array[mid]) {
           return mid;
       }
       if (low + 1 === high) {
           return -1;
       }
       num < array[mid] ? high = mid : low = mid;
    }
}
// bisearch([2,7,22,44,65,77,88,100],22) => 2

function bubbleSort(array){
  var sorted;
  do {
      sorted = false;
      for(var i =0; i < array.length-1; i++) {

          if (  array[i] > array[i+1]) {
           var temp = null;
           array[i]
           sorted = true;
          }
      }
  } while (sorted)
}
// bubbleSort([3,0,2,1])
