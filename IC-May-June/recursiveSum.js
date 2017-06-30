function recursiveSum(n) {
	if(n <= 1) {
		return n
	}

	return (recursiveSum(n - 1) + n);
}

var test1 = 1;
var test2 = 2;
var test3 = 3;
var test4 = 4;

//Output should be 1
console.log(recursiveSum(test1));

//Output should be 2 + 1
console.log(recursiveSum(test2));

//Output should be 3 + 3
console.log(recursiveSum(test3));

//Output should be 4 + 6
console.log(recursiveSum(test4));