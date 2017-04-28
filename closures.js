// Write a function that can run like this multiply(x,y) & multiply(x)(y)


// Closures 

// Functions have access to variables that are defined outside of the function

var me = "Tony";

function greetMe(name) {
  console.log(me);
}

greetMe();

// Note that the below function will still have access to the 'me' variable even though it is reassigned below the function, this proves that it is not just a 'snapshot' by the function.

me = "Tony Nguyen";

greetMe();

function say667() {
  var num = 42;
  var say = function(){ console.log(num) };
  num++;
  return say();
}

// Write a function that returns the product of every other number in an array.










