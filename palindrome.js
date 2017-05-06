// 1. Split String

// 2. Reverse Array, rejoin string

// 3. Compare original to reversed string and return true if equal

// UPDATE: 

// Remove special characters before split & reverse
// Remove extra spaces before split & reverse

function palindrome(str) {
  var removeSpecialChar = str.replace(/[^a-zA-Z ]/g, "");
  removeSpecialChar = str.replace(/\s/g, '');

  console.log(removeSpecialChar);
  var strArray = removeSpecialChar.split('');
  var reversed = strArray.reverse().join('');
  
  // console.log(str, reversed);
  
  return removeSpecialChar == reversed;
  
}

palindrome("_eye")
palindrome("race car")





