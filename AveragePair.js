// find pair of nuber has average equal to given number.

const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const average = (arr[start] + arr[end]) / 2;
    if (average === num) {
      console.log(average, arr[start], arr[end]);
      return true;
    } else if (average < num) {
      start++;
    } else end--;
  }
  return false;
};

// console.log(averagePair([1,2,3,4,5,6,7],6)) => true
// console.log(averagePair([1,2,3,4,5,6,7],16)) => false
