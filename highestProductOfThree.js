function highestProductOfThree(arr) {
  var n = arr.length - 1;
  var largest = arr[n];
  var secondLargest = arr[n - 1];
  var thirdLargest = arr[n - 2];
  var largestNeg = arr[0];
  var secondLargestNeg = arr[1];
  var possibleLargest = 1;
  var product = 1;

  
  if (largestNeg < 0 && secondLargestNeg < 0) {
    possibleLargest = largestNeg * secondLargestNeg * largest;
  }
  
  
  product = largest * secondLargest * thirdLargest;
  
  if (possibleLargest > product) {
    return possibleLargest;
  } else {
    return product;
  }
}

var arr = [-5, -4, 1, 2, 5, 6, 7]

highestProductOfThree(arr);