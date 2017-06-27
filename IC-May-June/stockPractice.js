function getProductsOfAllIntsExceptAtIndex(nums) {
	var productArray = [];
	var productSoFar = 1;

	for(var i = 0; i < nums.length; i++) {
		productArray[i] = productSoFar;
		productSoFar *= nums[i]
	}
}


var test1 = [2, 7, 3, 4];
getProductsOfAllIntsExceptAtIndex(test1);
