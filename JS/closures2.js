function greetMe(greeting) {
	return function(personName) {
		console.log(greeting + ' ' + personName);
	}
}

// this invokes the greetMe function and stores it into a variable 'sayHi'
var sayHi = greetMe('Hello');

// calling 'sayHi()' invokes the inner function that was returned fromm our greetMe() function
// the inner 'sayHi()' function knows what our greeting argument 'Hello' was because
// 'Hello' was saved in memory when the execution context was created for greetMe()
// sayHi('Tony');

// ===================================================================================================
// ===================================================================================================

function closureExample() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(function() {
			console.log(i);
		});
	}
	return arr;
}

// we invoke 'closureExample()' and store the return value (an array) into the variable 'functions'
var functions = closureExample();
// console.log(functions);

// why does this console.log(3)? 
// because the variable 'i' was last stored as '3' when the function 'closureExample()' was invoked
// by calling 'closureExample()', an execution context was created and the JS engine
// stored 'i' as '3' in memory before the function's execution context was removed from the stack
// functions[0]();



// functions[1]();
// functions[2]();

// ===================================================================================================
// ===================================================================================================

// ES6 'let' Keyword
function closureExample2() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		// the 'let' keyword will allow us to assign j to the for code block
		let j = i;
		arr.push(function() {
			console.log(j);
		});
	}
	return arr;
}

// note that we are invoking 'closureExample2()' and getting a return value of an array of functions
// and then storing it into the variable 'secondExample'
var secondExample = closureExample2();

// we can now invoke the functions from our arr
secondExample[0]();
secondExample[1]();
secondExample[2]();


// ===================================================================================================
// ===================================================================================================

// We can also do the above example without ES6 by creating a new execution context 
// each time we run through the 'for' block

// We can do this by immediately invoking a function and then returning a new function to get 
// stored into our array

function closureExample3() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		// we create a function with param 'j' and pass 'i' when we invoke the function
		// each time we invoke the function, the JS engine will store 'j' in memory as different variables
		arr.push(
			(function(j) {
				return function() {
					console.log(j);
				}
			}(i))
		)
	}
	return arr;
}

var thirdExample = closureExample3();
console.log(thirdExample);

thirdExample[0]();
thirdExample[1]();
thirdExample[2]();




