// Print charecter which is repeated maximum number of times
// examle: 'Hello There !' => e:3
// 'SOMERANDOMSTRING' =>
// Approach : conver charecters as key , and increase the count of key on reoccurence

const maxChar = (str) => {
  let charsObject = {};
  let max = 0;
  let maxCharValue = "";

  // iterate and make key value pair
  for (let char of str) {
    charsObject[char] = charsObject[char] + 1 || 1;
  }
  // to Iterate through objects
  for (let char in charsObject) {
    if (charsObject[char] > max) {
      max = charsObject[char];
      maxCharValue = char;
    }
  }
  console.log(`In the ${str} : ${maxCharValue} has been repeated ${max} times`);
};

//maxChar('Hello There')
