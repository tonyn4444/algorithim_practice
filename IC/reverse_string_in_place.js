var str = 'bladah';

function reverseString(str) {
  var arr = str.split('');
  var mid = arr.length / 2;
  var otherHalf = arr.length - 1;
  
  for (var i = 0; i < mid; i++) {
    var temp = arr[i];
    arr[i] = arr[otherHalf];
    arr[otherHalf] = temp;
    otherHalf -= 1;
    
  }
  return arr.join('');
}


reverseString(str);

// memory usage O(n)
// runtime O(n)
