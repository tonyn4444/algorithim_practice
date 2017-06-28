function mergeArrays(arr1, arr2) {
	var startingArray = null;
	var otherArray = null;
	if(arr1[0] < arr2[0]) {
	  startingArray = arr1;
	  otherArray = arr2
	} else {
	  startingArray = arr2;
	  otherArray = arr1;
	}

	var mergedArray = [];
	mergedArray[0] = startingArray.shift();

	while(startingArray.length > 0 && otherArray.length > 0) {
		var firstArrayInt = startingArray.shift();
		console.log(firstArrayInt);
		var secondArrayInt = otherArray.shift();
		// console.log(firstArrayInt);
		// console.log(secondArrayInt);
		// console.log(f)
		if(firstArrayInt < secondArrayInt) {
			mergedArray.push(firstArrayInt);
			console.log(mergedArray);
		} else {
			mergedArray.push(secondArrayInt);
			console.log(mergedArray);
		}

		if()
	}
	
	// return unsortedMergedArray;
}

var myArray     = [3, 4, 6];
var alicesArray = [1, 5, 8];
mergeArrays(myArray, alicesArray);
