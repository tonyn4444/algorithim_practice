// 1. Split String

// 2. Reverse Array, rejoin string

// 3. Compare original to reversed string and return true if equal


function palindrome(str) {
  var strArray = str.split('');
  var reversed = strArray.reverse().join('');
  
  console.log(str, reversed);
  
  return str == reversed;
  
}

