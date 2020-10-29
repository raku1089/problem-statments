// find max subArray sum for given length of array from array
const maxSubArraySum = (arr, num) => {
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let currentTotal = maxSum;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    if (currentTotal > maxSum) {
      maxSum = currentTotal;
    }
  }
  return maxSum;
};
// console.log(maxSubArraySum([41,2,3,16,5,2,5,17],3)) => 46
