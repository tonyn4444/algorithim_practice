// function highestProductOfThree(arr) {
//   var n = arr.length - 1;
//   var largest = arr[n];
//   var secondLargest = arr[n - 1];
//   var thirdLargest = arr[n - 2];
//   var largestNeg = arr[0];
//   var secondLargestNeg = arr[1];
//   var possibleLargest = 1;
//   var product = 1;

  
//   if (largestNeg < 0 && secondLargestNeg < 0) {
//     possibleLargest = largestNeg * secondLargestNeg * largest;
//   }
  
  
//   product = largest * secondLargest * thirdLargest;
  
//   if (possibleLargest > product) {
//     return possibleLargest;
//   } else {
//     return product;
//   }
//   console.log(product);
// }

var arr = [-5, 10, 1, 2, -20, 6, 7]

function highestProductOfThree(arr) {
  var lowest = Math.min(arr[0], arr[1]);
  var highest = Math.max(arr[0], arr[1]);

  var lowestProductOfTwo = arr[0] * arr[1];
  var highestProductOfTwo = arr[0] * arr[1];

  var maxProductOfThree = arr[0] * arr[1] * arr[2];

  
}

highestProductOfThree(arr);