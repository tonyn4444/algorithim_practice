function matchParenthesis(sentence, openingParanIndex) {
	var paranCount = 0;

	for(var i = openingParanIndex + 1; i < sentence.length; i++) {
		var currentChar = sentence[i];

		if(currentChar === ')') {
			if(paranCount === 0) {
				return i;
			} else {
				paranCount -= 1;
			}
		}

		if(currentChar === '(') {
			paranCount += 1;
		}
	}
	throw new Error('No valid closing paran');
}

var sentence = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
// should return 79
console.log(matchParenthesis(sentence, 10));
console.log(matchParenthesis(sentence, 28));

