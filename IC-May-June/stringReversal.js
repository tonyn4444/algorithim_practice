function reverseString(str) {
	var strArray = str.split('');
	var secondHalfChar = strArray.length - 1;
	for(var i = 0; i < Math.floor(strArray.length / 2);i++) {
		var holder = strArray[i];
		strArray[i] = strArray[secondHalfChar];
		strArray[secondHalfChar] = holder;
		secondHalfChar -= 1;
		console.log(strArray);
	}
	return strArray.join('');
}

var string = 'testing';
// should return 'gnitset'
console.log(reverseString(string));
