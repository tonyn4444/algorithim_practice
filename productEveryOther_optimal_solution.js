// We can attain linear time complexity by saving the products of numbers before & after each index

function productOfAllOtherNumbers(arr) {
	var productsArray = [];
	var totalSoFar = 1;

	// storing products of all numbers BEFORE each index
	for (var i = 0; i < arr.length; i++) {
		productsArray[i] = totalSoFar;
		totalSoFar *= arr[i];
		// console.log(productsArray);
	}

	var totalForNumsAfter = 1;

	// multiply current totals by numbers AFTER each index
	for (var j = arr.length - 1; j >= 0; j--) {
		productsArray[j] *= totalForNumsAfter;
		totalForNumsAfter *= arr[j];
		console.log(productsArray);
	}
	return productsArray;
}

var arr = [6, 2, 3, 4];

productOfAllOtherNumbers(arr);