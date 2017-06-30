var nums = [3, 1, 5, 2];
// [1, 3, 5, 2]
// [1, 3, 5, 2]
// [1, 2, 3, 5]

function insertionSort(nums) {
	for(var i = 1; i < nums.length; i++) {
		var current = nums[i];
		for(var j = 0; j < i; j--) {
			if(current < nums[j]) {
				nums[i] = nums[j];
				nums[j] = current;
				console.log(nums);
			}
		}
	}
}

insertionSort(nums);