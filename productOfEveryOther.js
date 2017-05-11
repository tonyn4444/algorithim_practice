var arr = [1, 2, 3]; 

// productOfEveryOther() ==> [2*3, 1*3, 2*1];

// go through array and multiply current by every other after self

// store number 

// start from j = arr.length - 1, go through the new array backwards and multiply by every num before self

function productOfAllOtherNumbers(arr) {
  var productOfNumsAfter = [];
  var total = 1;
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      total *= arr[j];
    }
    productOfNumsAfter.push(total);
    total = 1;
  }
  
  for (var q = arr.length - 1; q > 0; q--) {
    for (var k = q - 1; k > 0; k--) {
      productOfNumsAfter[q] *= arr[k];
    }
  }
  return productOfNumsAfter
}

var arr = [1, 2, 3, 4];

productOfAllOtherNumbers(arr);

// this gives us a time complexity of O(n^2), but we can do better