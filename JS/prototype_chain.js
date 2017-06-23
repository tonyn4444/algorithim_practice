// Why is the following not a valid IIFE?
// function a() {}()
// JS Engines will read any line that starts with the keyword 'function'
// as a function statement, in order to immediately invoke function statements you need
// to trick the engine by surrounding the function with the grouping operator '()'

(function a() {
	console.log('Hello');
}());