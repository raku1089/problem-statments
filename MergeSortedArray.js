// Merge two sorted array
// [0,3,10,15], [1,5,7,10] => [0,1,3,5,7,10,10,15]
// [0,3], [1] => [0,1,3]

function mergeSortedArray(arr1, arr2) {
  const sortedArray = [];
  let arrItem1 = arr1[0];
  let arrItem2 = arr2[0];
  let i = 1;
  let j = 1;
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arrItem1 || arrItem2) {
    if (!arrItem2 || arrItem1 < arrItem2) {
      sortedArray.push(arrItem1);
      arrItem1 = arr1[i];
      i++;
    } else {
      sortedArray.push(arrItem2);
      arrItem2 = arr2[j];
      j++;
    }
    // to remove duplicates
    // else if(arrItem1 === arrItem2){
    // sortedArray.push(arrItem2);arrItem1= arr1[i];arrItem2= arr2[j];i++; j++;}
  }
  return sortedArray;
}

// with less variable or space complexity reduced

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}
