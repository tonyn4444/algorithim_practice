function isValid(str) {
	var matchingBrackets = {
		'{': '}',
		'(': ')',
		'[': ']'
	}

	var openingBrackets = new Set(['{', '[', '(']);
	var closingBrackets = new Set(['}', ']', ')']);

	var openersSeen = [];

	for(i = 0; i < str.length; i++) {
		var currentChar = str[i];

		if(openingBrackets.has(currentChar)) {
			openersSeen.push(currentChar);
		}

		if(closingBrackets.has(currentChar)) {
			var lastOpeningBracket = openersSeen.pop();

			if(matchingBrackets[lastOpeningBracket]	!== currentChar) {
				return false;
			}
		}
	}
	return true;
}

var test1 = '[{([())}]'

// should return false
console.log(isValid(test1));