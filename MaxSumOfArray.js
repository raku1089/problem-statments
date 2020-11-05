function maxSum(arr) {
  let highest = 0;
  let secondHighest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] > secondHighest) {
      secondHighest = arr[i];
    }
  }
  return secondHighest + highest;
}

// console.log(maxSum([1, 4, 15, 7, 8, 9, 12, 14, 56, 0, 3, 3, 7])); =>70
