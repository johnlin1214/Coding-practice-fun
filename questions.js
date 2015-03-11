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

function bubbleSort(array) {
    var sorted;
    do {
        sorted = false;
        for (var i=0; i<array.length-1; i++) {
            if (array[i] > array[i+1]) {
                var temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
                sorted = true;
            }
        }
    } while (sorted)
    return array;
}

// bubbleSort([3,0,2,1])

function getElByClassName(className, node) {
  var currentNode = node || document.body;
  var currentNodeClassList = currentNode.classList;
  var matchNodes = [];
  currentNodeClassList.forEach(function(name){
    if(name === className) {
      matchNodes.push(currentNode);
    }
  });

  var childernLength = currentNode.childern.length;
  if(childernLength > 0) {
    for(var index = 0; index < childernLength; index++) {
     matchNodes = matchNodes.concat(getElByClassName(className, currentNode.childern[index]));
   }
 }
 return matchNodes;
}

function longest_ascending_seq(array) {
  var collection = [];
  var cluster;
  for (var i=0; i< array.length-1; i++) {
    cluster = [];
    cluster.push(array[i]);
    for (var j=i+1; j< array.length; j++) {
      if (cluster[cluster.length-1] < array[j]) {
        cluster.push(array[j]);
      }
    }
    collection.push(cluster);
  }

  var maxLength = 0;
  var indexOfMaxLength;
  collection.forEach(function(cluster, index){
    if (cluster.length > maxLength) {
      maxLength = cluster.length;
      indexOfMaxLength = index;
    }
  });
  return collection[indexOfMaxLength];
}

// longest_ascending_seq(numSet) => [ 1, 2, 3, 6 ]

$('#container').on('click','.item', remove)

function remove() {
  $(this).fadeOut(900, function(){
   $(this).sibings().last().remove();
 }).fadeIn(1);
}


var array_1 = [5,8,9,11,12,13];
var array_2 = [1,2,3,4,10];

var index1 = 0;
var index2 = 0;
var merge = [];

while (merge.length !== array_1.length+array_2.length) {
    if (array_1[index1] < array_2[index2]) {
      merge.push(array_1[index1]);
      index1++;
    } else if (array_2[index2] < array_1[index1]) {
      merge.push(array_2[index2]);
      index2++;
    } else if (index1 === array_1.length-1 && index2 !== array_2.length) {
     merge.push(array_2[index2]);
     index2++;
   } else {
    merge.push(array_1[index1]);
    index1++;
  }
}

//

function matchingParens(str){
    var chars = str.split("");
    var stack = [];
    var goodMatches = { '{}': true, '[]': true };

    chars.forEach(function(char) {
      if (char === "{" || char === "[") {
          stack.push(char);
      } else if (char === "}" || char === "]") {
          var lastCharInStack = stack.pop;
          var checkPair = lastCharInStack + char;
          if (!goodMatches[checkPair]) {
              return false;
          }
      } else {
          false;
      }
    });
    return stack.length === 0 ?  true : false;
}
// matchingParens("(hello)my{name}is[amelia()]") == true
// matchingParens("(hello)my{name}is[amelia()]{") == false



