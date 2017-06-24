function reverseWords(words) {
	var wordsArr = words.split(' ');
	var secondHalf = wordsArr.length - 1;

	for(i = 0; i < Math.floor(wordsArr.length / 2); i++) {
		var temp = wordsArr[i];
		wordsArr[i] = wordsArr[secondHalf];
		wordsArr[secondHalf] = temp;
		secondHalf -= 1;
		// console.log(wordsArr)
	}
	return wordsArr.join(' ');
}

var message = 'find you will pain only go you recordings security the into if';

console.log(reverseWords(message));
// returns: 'if into the security recordings you go only pain will you find'
