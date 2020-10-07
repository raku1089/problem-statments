function firstRecurringCharecter(arr) {
  let mapData = {};

  for (let i = 0; i < arr.length; i++) {
    if (mapData[arr[i]]) {
      return arr[i];
    } else {
      mapData[arr[i]] = arr[i];
    }
  }
  return "No Recurring Char";
}

console.log(firstRecurringCharecter([2]));
