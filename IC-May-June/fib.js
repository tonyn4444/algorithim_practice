// function fib(n) {
// 	if(n === 0) {
// 		return 0;
// 	}

// 	if(n === 1 || n === 2) {
// 		return 1;
// 	}

// 	return (fib(n - 1) + fib(n - 2));
// }


	// fib(3) is 2;
	// fib(4) is 3;
	// fib(5) is 5;
	// fib(6) is 8;
	// fib(7) is 13;


// }

function Fibber() {
	this.memo = {};
}

Fibber.prototype.fib = function(n) {
	if(n < 0) {
		throw new Error('Cannot calculate fib of negative number');
	}

	if(n === 0 || n === 1) {
		return n;
	}

	//Check memo to see if we have already stored previous result
	if(this.memo.hasOwnProperty(n)) {
		return this.memo[n];
	}

	var result = this.fib(n - 1) + this.fib(n - 2);

	this.memo[n] = result;
	return result;


}

console.log(new Fibber().fib(8))