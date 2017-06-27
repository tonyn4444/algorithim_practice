function hasPalindromePermutation(str) {
	var hasOddCount = new Set();

	for(i = 0; i < str.length; i++) {
		var currentChar = str[i];

		if(hasOddCount.has(currentChar)) {
			hasOddCount.delete(currentChar);
		} else {
			hasOddCount.add(currentChar);
		}
	}
	return hasOddCount.size <= 1;
}

var test1 = "ivicc";

// Should return true
console.log(hasPalindromePermutation(test1));