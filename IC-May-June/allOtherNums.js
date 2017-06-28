var test1 = [3, 7, 3, 4];

function productExceptAtIndex(nums) {
	var productOfNumsBeforeIndex = [];

	var currentTotal = 1;

	for(var i = 0; i < nums.length; i++) {
		productOfNumsBeforeIndex[i] = currentTotal;
		currentTotal *= nums[i];
		// console.log(productOfNumsBeforeIndex);
	}

	var numsAfterIndex = 1;
	for(j = nums.length - 1; j >= 0; j--) {
		productOfNumsBeforeIndex[j] *= numsAfterIndex;
		numsAfterIndex *= nums[j];
		console.log(productOfNumsBeforeIndex)
	}

}

productExceptAtIndex(test1);