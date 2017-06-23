// 'this' within a function statement will refer to the global object
function a() {
	console.log(this);
}

// 'this' in a function expression will also point to the global object
var b = function() {
	console.log(this);
}

// a();
// b();

// 'this' will point to the object literal it was declared in, and not the global object
var c = {
	name: 'C object',
	// you can even access other properties within the same object
	log: function() {
		var self = this;
		self.name = 'New C Object Name';
		console.log(self);

		// one of the weird things about JS is that a function called within a function that is called within an object literal
		// the 'this' keyword will refer to the global object
		// to get around this, we can create a new variable and set it to 'this' (the obj literal)
		// e.g. var self = this;
		// and then instead of calling this.name, we can call self.name
		var setname = function(newname) {
			// the function expression has access to the 'self' variable
			// because it will look outside of it's lexical environment if it cannot find the variable in it's own env.
			self.name = newname;
		}

		setname('Third new name');
		console.log(self); 
	}
}

c.log();