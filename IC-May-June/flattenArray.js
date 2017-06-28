// First method: using .apply() and .concat()
function flattenArray(arr) {
	var newArray = [];
	newArray.concat().apply(newArray, //)
	}
}

var arrays = [[3], [4, 3], [5]];
// Should return [3, 4, 3, 5]
flattenArray(arrays);

