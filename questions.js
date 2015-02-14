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
