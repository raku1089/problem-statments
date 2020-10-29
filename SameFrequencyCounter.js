const sameFrequencyCoounter = (num1, num2) => {
  let str1 = num1.toString();
  let str2 = num2.toString();
  let counter1 = {};
  let counter2 = {};
  if (str1.length !== str2.length) return false;

  for (let ch of str1) {
    counter1[ch] = counter1[ch] + 1 || 1;
  }
  for (let ch of str2) {
    counter2[ch] = counter2[ch] + 1 || 1;
  }

  for (let ch in counter1) {
    if (counter1[ch] !== counter2[ch]) return false;
  }
  return true;
};
//sameFrequencyCoounter(123,333) => false
// sameFrequencyCoounter(123,321) => true

// accept variable number of arguments and check whether duplicates are there or not

function areThereDuplicates() {
  let counterKeys = {};
  for (let ch in arguments) {
    counterKeys[arguments[ch]] = (counterKeys[arguments[ch]] || 0) + 1;
    if (counterKeys[arguments[ch]] > 1) return true;
  }
  return false;
}
// console.log(areThereDuplicates(1,2,3,0,1)) => true
// console.log(areThereDuplicates(1,2,3,0,11)) => false

// with Sorting find duplicates

function areDuplicates(...args) {
  let start = 0;
  let next = 1;
  args.sort((a, b) => a > b);

  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false;
}
// console.log(areDuplicates(12,1,2,3))

// with set
function areDuplicatesWithSet(...args) {
  return new Set(args).size !== args.length;
}
// console.log(areDuplicatesWithSet(12,12,2,3))
