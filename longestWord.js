// Returns length of the longest word

// 1. Break sentence into array separated with elements separated by spaces
// 2. Store currentLargest
// 3. Loop through each word in array and update currentLargest as needed

function findLongestWord(str) {
  var wordArray = str.split(' ');
  var currentLargest = wordArray[0].length
  
  for (var i = 1; i < wordArray.length; i++) {
    // console.log(wordArray[i].length);
    currentLargest = Math.max(currentLargest, wordArray[i].length);
  }
  return currentLargest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");