function shift(str, left, right) {
  var arr = str.split('');
  var rightSide = arr.length - 1;
  var tempLeft = arr[0];
  var tempRight = arr[arr.length - 1];
  var leftShiftsLeft = left;
  var rightShiftsLeft = right;
  
  while (leftShiftsLeft > 0) {
    for (var i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[rightSide] = tempLeft;
    tempLeft = arr[0];
    tempRight = arr[arr.length - 1];

    leftShiftsLeft -= 1;
  }
  
  while (rightShiftsLeft > 0) {
    for (var j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = tempRight;
    rightShiftsLeft -= 1;
    tempRight = arr[arr.length - 1];
    
  }
  return arr.join('');  
}

var str = 'abcd';

shift(str, 2, 3);


// important notes

// tracking number of left and right shifts left
// tracking 'holes' in the array (for temp)





