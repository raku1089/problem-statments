// flat an nested arry using recursion

function flatten(arr) {
  let updatedArray = [];
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      updatedArray = updatedArray.concat(flatten(arr[i]));
    } else {
      updatedArray.push(arr[i]);
    }
  }
  return updatedArray;
}

// console.log(flatten([1,2,[3,4],[7,[9,10,[[[4]]]]]])) => [1, 2, 3, 4, 7, 9, 10, 4]
