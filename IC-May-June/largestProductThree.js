function largestProductOfThree(nums) {

	var largest = Math.max(nums[0], nums[1])
	var smallest = Math.min(nums[0], nums[1]);

	var largestProductOfTwo = nums[0] * nums[1];
	var smallestProductOfTwo = nums[0] * nums[1];

	var maxProductOfThree = nums[0] * nums[1] * nums[2];

	for(i = 0; i < nums.length; i++) {
		var current = nums[i];

		maxProductOfThree = Math.max(
			maxProductOfThree, 
			current * smallestProductOfTwo,
			current * largestProductOfTwo
		)

		largestProductOfTwo = Math.max(largestProductOfTwo, current * smallest, current * largest);
		smallestProductOfTwo = Math.min(smallestProductOfTwo, current * smallest, current * largest);

		largest = Math.max(largest, current);
		smallest = Math.min(smallest, current);
		console.log('Largest: ', largest);
		console.log('Smallest: ', smallest);
		console.log(maxProductOfThree);
	}

}

var test1 = [5, 4, 7, -3, 10, -50];
// Should return (77 * 50 * 23)
largestProductOfThree(test1);