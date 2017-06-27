function isPrime(n) {
	// Check if the number can be evenly divided by 2
	var divisor = 2;

	// Increment the divisor until we reach the number itself
	while(divisor < n) {
		if(n % divisor === 0) {
			return false;
		} else {
			divisor++
			// console.log(divisor);
		}
	}
	return true;
}

console.log(isPrime(7));
console.log(isPrime(8));
// Should return true
console.log(isPrime(137));
// Should return false
console.log(isPrime(237));
